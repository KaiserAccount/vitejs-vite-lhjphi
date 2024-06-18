import { h } from 'preact';
import './legal_pages.css';

const TermsOfService = () => (
  <section className="document" id="terms-of-service">
    <h1>Terms of Service</h1>
    <p>Welcome to our Terms of Service...</p>
    <div className="content-container">
      <div className="document">
        <h1>Terms and Conditions for DoctorSelect.online</h1>
        <p>
          <strong>Effective Date:</strong> [Insert Date]
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By using DoctorSelect.online, you agree to these Terms and Conditions.
        </p>

        <h2>2. Services Provided</h2>
        <p>We offer the following services:</p>
        <ul>
          <li>Consultations (in-person and online)</li>
          <li>Telemedicine services</li>
          <li>Prescription services</li>
          <li>Medical device brokering</li>
        </ul>

        <h2>3. Account Registration</h2>
        <p>To use our services, you must create an account and provide:</p>
        <ul>
          <li>Name</li>
          <li>Contact information</li>
          <li>Medical history</li>
          <li>Payment details</li>
        </ul>

        <h2>4. User Conduct</h2>
        <p>Users must:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Respect doctor-patient confidentiality</li>
          <li>Follow our terms of service</li>
        </ul>

        <h2>5. Payment and Refunds</h2>
        <p>
          <strong>Payment Methods:</strong> Credit cards, PayPal, Check
        </p>
        <p>
          <strong>Refund Policy:</strong> Refunds for cancellations made 1-day
          before the scheduled service. Cancellation fees may apply for late
          cancellations or no-shows.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          <strong>Ownership:</strong> Proprietary content is owned by
          DoctorSelect.online. User-generated content is owned by users but may
          be used by us.
        </p>
        <p>
          <strong>Usage:</strong> Personal use is permitted. Sharing is allowed
          with proper attribution.
        </p>

        <h2>7. Third-Party Links</h2>
        <p>
          We may link to third-party websites. Users should review their privacy
          policies and terms of service as we are not responsible for their
          content.
        </p>

        <h2>8. Dispute Resolution</h2>
        <p>Disputes are resolved as follows:</p>
        <ul>
          <li>Initial resolution through customer service</li>
          <li>Mediation or arbitration if unresolved</li>
          <li>Governed by New York State laws</li>
        </ul>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right to update these terms at any time. Significant
          changes will be notified.
        </p>

        <h2>10. Contact Information</h2>
        <p>For questions or concerns, contact us at:</p>
        <p>
          <strong>Address:</strong> 128 N. Division St.
          <br />
          <strong>Email:</strong>{' '}
          <a href="mailto:messages@doctorselect.online">
            messages@doctorselect.online
          </a>
          <br />
          <strong>Phone Number:</strong> 3158574934
        </p>
      </div>
    </div>
  </section>
);

export default TermsOfService;
