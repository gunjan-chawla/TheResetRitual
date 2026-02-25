import React from 'react';
import { ArrowLeft, Mail, Shield } from 'lucide-react';
import '../styles/privacy-policy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      {/* Header */}
      <header className="privacy-header">
        <div className="privacy-header-content">
          <a href="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </a>
          <div className="privacy-logo">
            <img src="/logo.png" alt="Reset Rituals" className="privacy-logo-image" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="privacy-main">
        <div className="privacy-container">
          {/* Title Section */}
          <div className="privacy-title-section">
            <div className="privacy-icon">
              <Shield size={48} />
            </div>
            <h1 className="privacy-title">Privacy Policy</h1>
            <p className="privacy-last-updated">Last Updated: February 2026</p>
          </div>

          {/* Introduction */}
          <div className="privacy-intro">
            <p>
              This Privacy Policy describes how <strong>ThePro.Fit</strong> (Parent Company), GST No. 06AKWPC8005F1Z7, 
              operates and manages personal information collected through its website, products, and wellness services, 
              including offerings under the brand <strong>Reset Rituals</strong> and other offerings. By accessing or using 
              our website and services, you agree to the terms outlined in this Privacy Policy.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="privacy-sections">
            {/* Section 1 */}
            <section className="privacy-section">
              <h2>1. Information We Collect</h2>
              
              <h3>a. Personal Information</h3>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Organization or company name</li>
                <li>Session preferences and feedback</li>
              </ul>

              <h3>b. Wellness-Related Information</h3>
              <ul>
                <li>General wellness goals or preferences</li>
                <li>Session participation data</li>
                <li>Non-medical self-reported inputs (surveys, engagement metrics)</li>
              </ul>
              <p className="privacy-note">We do not collect or store medical records or sensitive health data.</p>

              <h3>c. Technical Information</h3>
              <ul>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Website usage data (via cookies or analytics tools)</li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="privacy-section">
              <h2>2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul>
                <li>Deliver and manage wellness sessions and programs</li>
                <li>Improve service quality and user experience</li>
                <li>Communicate session updates, schedules, and feedback requests</li>
                <li>Generate anonymized engagement and impact reports</li>
                <li>Meet legal, regulatory, or contractual obligations</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="privacy-section">
              <h2>3. Data Sharing & Disclosure</h2>
              <p><strong>We do not sell or rent personal data.</strong></p>
              <p>Data may be shared only with:</p>
              <ul>
                <li>Authorized coaches or facilitators (on a need-to-know basis)</li>
                <li>Technology service providers (analytics, scheduling, communication tools)</li>
                <li>Corporate clients (only aggregated and anonymized data)</li>
                <li>Legal authorities, if required by law</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="privacy-section">
              <h2>4. Data Security</h2>
              <p>
                We implement reasonable administrative, technical, and organizational measures to protect data 
                against unauthorized access, loss, or misuse. However, no digital transmission or storage system 
                is 100% secure.
              </p>
            </section>

            {/* Section 5 */}
            <section className="privacy-section">
              <h2>5. Data Retention</h2>
              <p>We retain personal information only for as long as:</p>
              <ul>
                <li>Necessary to provide services</li>
                <li>Required for reporting or legal compliance</li>
              </ul>
              <p>Users may request deletion of their data by contacting us.</p>
            </section>

            {/* Section 6 */}
            <section className="privacy-section">
              <h2>6. User Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal information</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent for communications</li>
              </ul>
              <p>Requests can be made via the contact details below.</p>
            </section>

            {/* Section 7 */}
            <section className="privacy-section">
              <h2>7. Cookies & Analytics</h2>
              <p>We may use cookies or similar technologies to:</p>
              <ul>
                <li>Analyze website traffic</li>
                <li>Improve functionality</li>
                <li>Understand user engagement</li>
              </ul>
              <p>You may disable cookies through browser settings.</p>
            </section>

            {/* Section 8 */}
            <section className="privacy-section">
              <h2>8. Children's Privacy</h2>
              <p>
                Our services are not intentionally directed at children under 18. We do not knowingly 
                collect data from minors.
              </p>
            </section>

            {/* Section 9 */}
            <section className="privacy-section">
              <h2>9. Wellness & Medical Disclaimer</h2>
              <p>
                All services, sessions, and content provided by ThePro.Fit and Reset Rituals are for 
                <strong> general wellness and educational purposes only</strong>. They are not a substitute 
                for medical advice, diagnosis, or treatment. Participants are advised to consult a qualified 
                healthcare professional before engaging in physical or wellness activities. Participation is 
                voluntary and at the user's own discretion.
              </p>
            </section>

            {/* Section 10 */}
            <section className="privacy-section">
              <h2>10. No Guarantees</h2>
              <p>
                While we aim to deliver meaningful well-being benefits, individual results may vary. 
                We make no guarantees regarding specific health, productivity, or performance outcomes.
              </p>
            </section>

            {/* Section 11 */}
            <section className="privacy-section">
              <h2>11. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul>
                <li>ThePro.Fit shall not be liable for any indirect, incidental, special, or consequential damages</li>
                <li>This includes physical discomfort, emotional response, loss of data, or business interruption arising from participation in wellness activities or website use</li>
                <li>Users assume full responsibility for their participation</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section className="privacy-section">
              <h2>12. Indemnity</h2>
              <p>
                You agree to indemnify and hold harmless ThePro.Fit, its founders, employees, contractors, 
                coaches, and partners from any claims, damages, losses, or expenses arising from:
              </p>
              <ul>
                <li>Misuse of the website or services</li>
                <li>Violation of this Privacy Policy</li>
                <li>Breach of applicable laws or third-party rights</li>
              </ul>
            </section>

            {/* Section 13 */}
            <section className="privacy-section">
              <h2>13. Force Majeure</h2>
              <p>
                ThePro.Fit shall not be held responsible for failure or delay in performance due to events 
                beyond reasonable control, including natural disasters, technical failures, internet outages, 
                or government actions.
              </p>
            </section>

            {/* Section 14 */}
            <section className="privacy-section">
              <h2>14. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                with a revised "Last Updated" date.
              </p>
            </section>

            {/* Section 15 */}
            <section className="privacy-section">
              <h2>15. Governing Law & Jurisdiction</h2>
              <p>
                This Privacy Policy shall be governed by the laws of India. Courts of New Delhi, India 
                shall have exclusive jurisdiction.
              </p>
            </section>

            {/* Section 16 - Contact */}
            <section className="privacy-section privacy-contact">
              <h2>16. Contact Information</h2>
              <p>For questions, data requests, or concerns:</p>
              <div className="privacy-contact-card">
                <h3>ThePro.Fit</h3>
                <p className="gst-info">GST: 06AKWPC8005F1Z7</p>
                <a href="mailto:gunjan@thepro.fit" className="privacy-email">
                  <Mail size={18} />
                  <span>gunjan@thepro.fit</span>
                </a>
              </div>
            </section>
          </div>

          {/* Back to Home */}
          <div className="privacy-footer-cta">
            <a href="/" className="btn btn-primary">
              <ArrowLeft size={18} />
              Back to Home
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="privacy-footer">
        <p>© 2026 Reset Rituals by ThePro.Fit. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
