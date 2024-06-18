import { h } from 'preact';
import './legal_pages.css';

const PrivacyPolicy = () => (
  <section className="document" id="privacy-policy">
    <h1>Privacy Policy</h1>
    <p>Your privacy is important to us...</p>
    <div className="content-container">
      <div className="document">
        <h1>Privacy Policy for DoctorSelect.online</h1>
        <p>
          <strong>Effective Date:</strong> 6/7/2024
        </p>

        <h2>1. Introduction</h2>
        <p>
          DoctorSelect.online ("we," "our," "us") values your privacy. This
          Privacy Policy explains how we collect, use, and protect your personal
          information.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          <strong>Personal Information:</strong> Name, contact information,
          medical history, payment details.
        </p>
        <p>
          <strong>Usage Data:</strong> Information about how you use our website
          and services.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          <strong>Providing Services:</strong> Personalized medical services,
          processing payments, managing appointments.
        </p>
        <p>
          <strong>Marketing and Promotions:</strong> Sending information about
          our services and special offers.
        </p>
        <p>
          <strong>Research and Analysis:</strong> Improving our services and
          conducting research.
        </p>

        <h2>4. Sharing Your Information</h2>
        <p>Shared with third-party service providers for:</p>
        <ul>
          <li>Payment processing</li>
          <li>Medical device brokering</li>
          <li>Telemedicine services</li>
        </ul>

        <h2>5. Security Measures</h2>
        <p>
          We implement robust security measures to protect your data, including:
        </p>
        <ul>
          <li>Data encryption</li>
          <li>Secure servers</li>
          <li>Regular security audits</li>
        </ul>

        <h2>6. Handling Data Breaches</h2>
        <p>In the event of a data breach, we will:</p>
        <ul>
          <li>Immediately investigate and contain the breach</li>
          <li>Notify affected users</li>
          <li>Implement measures to prevent future breaches</li>
        </ul>

        <h2>7. Regulatory Compliance</h2>
        <p>
          We comply with HIPAA regulations to protect patient health
          information. This includes regular staff training, secure data
          handling procedures, and compliance audits.
        </p>

        <h2>8. User Responsibilities</h2>
        <p>Users must:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Respect doctor-patient confidentiality</li>
          <li>Adhere to our terms of service</li>
        </ul>

        <h2>9. Contact Information</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please contact us at:
        </p>
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
    {/* ); */}
  </section>
);

export default PrivacyPolicy;
