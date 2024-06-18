import { h, Component } from 'preact';
import './EnterZipCode.css'; // Ensure the correct file name
import DSOImage from './assets/DSO_b128px_min.png'; // Ensure the correct relative path
import specialistsData from './assets/specialists.json';
import { route } from 'preact-router'; // Import route from preact-router

// import usePageAnalytics from './analytics.jsx'; // Import the hook

// usePageAnalytics({"b":"b"})
class EnterZipCode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: '',
      specialty: this.props.specialty,
    };
  }

  handleChange = (e) => {
    this.setState({ zipCode: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { zipCode } = this.state;
    const { specialty } = this.props; // Correctly access the specialty prop
    // Redirect to the new route
    route(`/${specialty}/${zipCode}`);
  };

  render() {
    const { zipCode } = this.state;
    const { headline_1, subtitle } = specialistsData[this.props.specialty];
    return (
      <div className="enter-zip-code">
        <div className="header">
          <img src={DSOImage} alt="DSO Logo" className="logo" />
          <h1>{headline_1}</h1>
          <p>{subtitle}</p>
        </div>

        <form onSubmit={this.handleSubmit} className="zip-code-form">
          <label htmlFor="zipCode" className="zip-code-label">
            Enter Zip Code
          </label>
          <input
            type="text"
            id="zipCode"
            placeholder="Zip Code"
            value={zipCode}
            onChange={this.handleChange}
            required
            className="zip-code-input"
          />
          <button type="submit" className="show-button">
            FIND DOCTORS
          </button>
        </form>

        <div className="footer">
          <p>
            Trademark &amp; Copyright Notice:™ and © 2023 DoctorSelect LLC. All
            rights reserved. Use of this site (including any and all parts or
            components) constitutes your acceptance of our Updated{' '}
            <a href="../legal/terms">Terms</a> of Use and Updated{' '}
            <a href="../legal/privacy-policy">Privacy Policy.</a>
          </p>
        </div>
      </div>
    );
  }
}

export default EnterZipCode; // Ensure the correct export name
