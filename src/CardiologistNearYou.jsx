import { Component } from 'preact';
import './CardiologistNearYou.css';
import DSOImage from './assets/DSO_b128px_min.png'; // Ensure the correct relative path

// import DSOImage from './../DSO_b128px_min.png'; // Ensure the correct relative path
// ./.src/assets/
class CardiologistNearYou extends Component {
  render() {
    return (
      <div className="cardiologist-near-you">
        <div className="header">
          <img src={DSOImage} alt="DSO Logo" className="logo" />
          <h1>Cardiologist near you</h1>
          <p className="subtitle">(Heart Specialists)</p>
        </div>
        {/* Top card container */}
        <div className="card-holder">
          <div className="doctor-card">
            <div className="card-header">
              <div className="photo-header">
                {/* <div>
                </div> */}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/doctorselect-b89b6.appspot.com/o/Doctors%2Fistockphoto-1391740406-612x612.jpg?alt=media&token=733660a3-80c4-4fa9-8906-8fbc286df173"
                  alt="Doctor Avatar"
                  className="avatar"
                />

                <img
                  src="https://cdn-icons-png.freepik.com/256/6941/6941697.png?semt=ais_hybrid"
                  alt="Crown Icon"
                  className="crown-icon"
                />
              </div>
              <div className="information-container">
                <div className="staff-pick-container">
                  <span className="staff-pick">Staff pick</span>
                  <p className="distance">(10 miles away)</p>
                </div>
                <div className="details">
                  <h2 className="name">Dr. Laura Saunderfield</h2>
                  <h2 className="name">Private Practice</h2>

                  {/* <p className="name">Private Practice</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Banner */}
          <div className="banner"></div>

          {/* Bottom card container */}
        </div>

        {/* SERVICES */}
        <div className="services">
          <h3>Services: </h3>
          <p className="service-list">
            <span className="bold">Screenings</span>, Heart endoscopy,
            Congestive heart disease prevention
          </p>

          <p className="insurance-status">
            Accepts insurance: <span className="yes">Yes</span>
          </p>
        </div>
        {/* Insurance */}
        <div className="cta-container">
          <a
            className="book-now"
            href="https://calendly.com/brandynmckeen20/doctorselect-online-free-consultation"
          >
            BOOK NOW
          </a>
        </div>

        <p className="guarantee">Backed by our 2nd opinion guarantee*</p>

        {/* Great Alterntive */}

        <p className="see-more">See more</p>
        <div className="card-holder">
          <div className="doctor-card cutoff">
            <div className="card-header">
              <div className="photo-header">
                {/* <div>
                </div> */}
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/doctorselect-b89b6.appspot.com/o/Doctors%2FIMG_0414-980x653.jpg?alt=media&token=523aaebd-ee47-4886-860e-222fc6755097"
                  alt="Doctor Avatar"
                  className="avatar"
                />

                <img
                  src="https://cdn-icons-png.freepik.com/256/6941/6941697.png?semt=ais_hybrid"
                  alt="Crown Icon"
                  className="crown-icon"
                />
              </div>
              <div className="information-container">
                <div className="staff-pick-container">
                  <span className="staff-pick">Great Alternative</span>
                  <p className="distance">(16 miles away)</p>
                </div>
                <div className="details">
                  <h2 className="name">Courtney May DDS</h2>
                  <h2 className="name">Private Practice</h2>

                  {/* <p className="name">Private Practice</p> */}
                </div>
              </div>
            </div>
          </div>
          <div class="banner re-banner"></div>

          {/* Bottom card container */}
        </div>

        {/* Great Alternative END */}

        <div className="footer">
          <p>
            Trademark &amp; Copyright Notice: *and © 2023 DoctorSelect LLC. All
            rights reserved. Use of this site (including any and all parts or
            components) constitutes your acceptance of our Updated Terms of Use
            and Updated Privacy Policy.
          </p>
        </div>
      </div>
    );
  }
}

export default CardiologistNearYou;
