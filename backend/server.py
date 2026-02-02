from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email configuration
SMTP_SERVER = os.environ.get('SMTP_SERVER', 'smtp.gmail.com')
SMTP_PORT = int(os.environ.get('SMTP_PORT', '587'))
SMTP_USERNAME = os.environ.get('SMTP_USERNAME', '')
SMTP_PASSWORD = os.environ.get('SMTP_PASSWORD', '')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'Gunjan@thepro.fit')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Model
class ContactFormSubmission(BaseModel):
    name: str
    email: EmailStr
    company: str
    employees: str
    phone: Optional[str] = None
    message: Optional[str] = None

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Email sending function
async def send_email(subject: str, html_content: str, recipient: str = RECIPIENT_EMAIL):
    """Send email using Gmail SMTP"""
    try:
        message = MIMEMultipart("alternative")
        message["From"] = SMTP_USERNAME
        message["To"] = recipient
        message["Subject"] = subject
        
        html_part = MIMEText(html_content, "html")
        message.attach(html_part)
        
        await aiosmtplib.send(
            message,
            hostname=SMTP_SERVER,
            port=SMTP_PORT,
            username=SMTP_USERNAME,
            password=SMTP_PASSWORD,
            start_tls=True
        )
        return True
    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False

# Contact form submission endpoint
@api_router.post("/contact")
async def submit_contact_form(form_data: ContactFormSubmission):
    """Handle contact form submissions and send email"""
    try:
        # Create email HTML content
        html_content = f"""
        <html>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <h2 style="color: #6B7454;">New Demo Request - Reset Rituals</h2>
                <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
                    <p><strong>Name:</strong> {form_data.name}</p>
                    <p><strong>Email:</strong> {form_data.email}</p>
                    <p><strong>Company:</strong> {form_data.company}</p>
                    <p><strong>Team Size:</strong> {form_data.employees}</p>
                    {f'<p><strong>Phone:</strong> {form_data.phone}</p>' if form_data.phone else ''}
                    {f'<p><strong>Message:</strong></p><p>{form_data.message}</p>' if form_data.message else ''}
                </div>
                <p style="margin-top: 20px; color: #666; font-size: 12px;">
                    This email was sent from the Reset Rituals website contact form.
                </p>
            </body>
        </html>
        """
        
        # Send email
        email_sent = await send_email(
            subject=f"New Demo Request from {form_data.company}",
            html_content=html_content
        )
        
        if email_sent:
            return {
                "status": "success",
                "message": "Your request has been submitted successfully. We'll be in touch within 24 hours."
            }
        else:
            return {
                "status": "error",
                "message": "Failed to send email. Please try again or contact us directly."
            }
            
    except Exception as e:
        logger.error(f"Contact form error: {str(e)}")
        return {
            "status": "error",
            "message": "An error occurred. Please try again later."
        }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()