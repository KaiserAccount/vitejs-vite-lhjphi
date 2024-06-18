import { Component } from 'preact';
import './CardiologistNearYou.css';

class CardiologistNearYou extends Component {
  render() {
    return (
      <div className="cardiologist-near-you">
        <div className="header">
          <img src="/dso-logo.png" alt="DSO Logo" className="logo" />
          <h1>Cardiologist near you</h1>
          <p className="subtitle">(Heart Specialists)</p>
        </div>
        <div className="doctor-card">
          <div className="card-header">
            <img
              src="https://img.freepik.com/free-photo/professional-doctor-posing_23-2147642764.jpg"
              alt="Doctor Avatar"
              className="avatar"
            />
            <div className="details">
              <h2 className="name">Dr. Laura Saunderfield</h2>
              <p className="practice">Private Practice</p>
              <p className="distance">
                <span className="staff-pick">Staff pick</span>
                <span className="distance-value">10 miles away</span>
              </p>
            </div>
          </div>
          <div className="services">
            <h3>Services:</h3>
            <ul>
              <li>Screenings</li>
              <li>Heart endoscopy</li>
              <li>Congestive heart disease prevention</li>
            </ul>
            <p className="insurance">
              Accepts most insurances: <span className="yes">Yes</span>
            </p>
          </div>
          <div className="cta-container">
            <button className="book-now">BOOK NOW</button>
            <p className="guarantee">Backed by our 2nd opinion guarantee*</p>
          </div>
        </div>
        <div className="alternative">
          <img
            src="https://media.istockphoto.com/id/1391740406/photo/one-smart-beautiful-indian-asian-woman-or-lady-or-female-doctor-with-lose-open-hair-and-arms.jpg?s=612x612&w=0&k=20&c=Jct1LcrGr3jlBLhtrQTttSusQdMqDO_xmrtjTiR0rfc="
            alt="Alternative Avatar"
            className="avatar"
          />
          <div className="details">
            <h3 className="name">Courtney May DDS</h3>
            <p className="practice">Great Alternative</p>
          </div>
        </div>
        <div className="footer">
          <p>
            Trademark &amp; Copyright Notice: *and © 2023 SB LLC. All rights
            reserved. Use of this site (including any and all parts or
            components) constitutes your acceptance of our Updated Terms of Use
            and Updated Privacy Policy.
          </p>
        </div>
      </div>
    );
  }
}
export default CardiologistNearYou;
// // fs
// fsa
// asf
{
  /*

  <div className="cardiologist-near-you">
        <div className="header">
          <img src="/dso-logo.png" alt="DSO Logo" className="logo" />
          <h1>Cardiologist near you</h1>
          <p className="subtitle">(Heart Specialists)</p>
        </div>
        <div className="doctor-card">
          <div className="card-header">
            <img
              src="/doctor-avatar.png"
              alt="Doctor Avatar"
              className="avatar"
            />
            <div className="details">
              <h2 className="name">Dr. Laura Saunderfield</h2>
              <p className="practice">Private Practice</p>
              <p className="distance">
                <span className="staff-pick">Staff pick</span>
                <span className="distance-value">10 miles away</span>
              </p>
            </div>
          </div>
          <div className="services">
            <h3>Services:</h3>
            <ul>
              <li>Screenings</li>
              <li>Heart endoscopy</li>
              <li>Congestive heart disease prevention</li>
            </ul>
            <p className="insurance">
              Accepts most insurances: <span className="yes">Yes</span>
            </p>
          </div>
          <div className="cta-container">
            <button className="book-now">BOOK NOW</button>
            <p className="guarantee">Backed by our 2nd opinion guarantee*</p>
          </div>
        </div>
        <div className="alternative">
          <img
            src="/alternative-avatar.png"
            alt="Alternative Avatar"
            className="avatar"
          />
          <div className="details">
            <h3 className="name">Courtney May DDS</h3>
            <p className="practice">Great Alternative</p>
          </div>
        </div>
        <div className="footer">
          <p>
            Trademark &amp; Copyright Notice: *and © 2023 SB LLC. All rights
            reserved. Use of this site (including any and all parts or
            components) constitutes your acceptance of our Updated Terms of Use
            and Updated Privacy Policy.
          </p>
        </div>
      </div>
    );
 
*/
}
