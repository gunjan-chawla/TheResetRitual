#!/usr/bin/env python3
"""
Backend API Testing for Reset Rituals
Tests the FastAPI endpoints for health check and status management
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Backend URL from frontend environment
BACKEND_URL = "https://ritual-reset.preview.emergentagent.com"
API_BASE = f"{BACKEND_URL}/api"

def test_health_check():
    """Test GET /api/ endpoint"""
    print("🔍 Testing Health Check Endpoint...")
    try:
        response = requests.get(f"{API_BASE}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Health check endpoint working correctly")
                return True
            else:
                print(f"❌ Unexpected response message: {data}")
                return False
        else:
            print(f"❌ Health check failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Health check request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Health check error: {e}")
        return False

def test_create_status_check():
    """Test POST /api/status endpoint"""
    print("\n🔍 Testing Create Status Check Endpoint...")
    try:
        # Use realistic test data
        test_data = {
            "client_name": "Acme Corporation"
        }
        
        response = requests.post(
            f"{API_BASE}/status", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=10
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            required_fields = ["id", "client_name", "timestamp"]
            
            if all(field in data for field in required_fields):
                if data["client_name"] == test_data["client_name"]:
                    print("✅ Status check creation working correctly")
                    return True, data["id"]
                else:
                    print(f"❌ Client name mismatch: expected {test_data['client_name']}, got {data['client_name']}")
                    return False, None
            else:
                missing_fields = [field for field in required_fields if field not in data]
                print(f"❌ Missing required fields: {missing_fields}")
                return False, None
        else:
            print(f"❌ Status check creation failed with status {response.status_code}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Status check creation request failed: {e}")
        return False, None
    except Exception as e:
        print(f"❌ Status check creation error: {e}")
        return False, None

def test_get_status_checks():
    """Test GET /api/status endpoint"""
    print("\n🔍 Testing Get Status Checks Endpoint...")
    try:
        response = requests.get(f"{API_BASE}/status", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        if response.status_code == 200:
            data = response.json()
            print(f"Response: Found {len(data)} status checks")
            
            if isinstance(data, list):
                if len(data) > 0:
                    # Check structure of first item
                    first_item = data[0]
                    required_fields = ["id", "client_name", "timestamp"]
                    
                    if all(field in first_item for field in required_fields):
                        print("✅ Status checks retrieval working correctly")
                        return True
                    else:
                        missing_fields = [field for field in required_fields if field not in first_item]
                        print(f"❌ Status check items missing fields: {missing_fields}")
                        return False
                else:
                    print("✅ Status checks retrieval working (empty list)")
                    return True
            else:
                print(f"❌ Expected list response, got {type(data)}")
                return False
        else:
            print(f"❌ Status checks retrieval failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Status checks retrieval request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Status checks retrieval error: {e}")
        return False

def test_contact_endpoint():
    """Test POST /api/contact endpoint (bonus test)"""
    print("\n🔍 Testing Contact Form Endpoint...")
    try:
        # Use realistic test data
        test_data = {
            "name": "John Smith",
            "email": "john.smith@acmecorp.com",
            "company": "Acme Corporation",
            "employees": "50-100",
            "phone": "+1-555-0123",
            "message": "Interested in learning more about your wellness programs for our team."
        }
        
        response = requests.post(
            f"{API_BASE}/contact", 
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=15  # Longer timeout for email sending
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if "status" in data and "message" in data:
                print("✅ Contact form endpoint responding correctly")
                return True
            else:
                print(f"❌ Contact form response missing required fields")
                return False
        else:
            print(f"❌ Contact form failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Contact form request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Contact form error: {e}")
        return False

def main():
    """Run all backend API tests"""
    print("🚀 Starting Reset Rituals Backend API Tests")
    print(f"Testing against: {API_BASE}")
    print("=" * 60)
    
    results = {}
    
    # Test 1: Health Check
    results['health_check'] = test_health_check()
    
    # Test 2: Create Status Check
    results['create_status'], created_id = test_create_status_check()
    
    # Test 3: Get Status Checks
    results['get_status'] = test_get_status_checks()
    
    # Test 4: Contact Form (bonus)
    results['contact_form'] = test_contact_endpoint()
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST SUMMARY")
    print("=" * 60)
    
    passed = sum(1 for result in results.values() if result)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{test_name.replace('_', ' ').title()}: {status}")
    
    print(f"\nOverall: {passed}/{total} tests passed")
    
    if passed == total:
        print("🎉 All backend API tests passed!")
        return 0
    else:
        print("⚠️  Some backend API tests failed!")
        return 1

if __name__ == "__main__":
    sys.exit(main())