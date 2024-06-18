import { h, Component } from 'preact';
import { firestore } from './firebase.js'; // Adjust the path as necessary
import { collection, query, where, getDocs } from 'firebase/firestore';
import { route } from 'preact-router';
import './CardiologistNearYou.css'; // Assuming the CSS file is the same
import { useState } from 'preact/hooks';
import DSOImage from './assets/DSO_b128px_min.png';
import specialistsData from './assets/specialists.json';
import { initializeApp } from 'firebase/app';

class Specialist_to_ZipCode extends Component {
  state = {
    doctor: null,
    loading: true,
    error: null,
    userLocation: null,
  };

  async componentDidMount() {
    const { specialty, zipCode } = this.props;
    let additionalClass = '';
    let doc_2 = {};

    console.log(specialty, zipCode);
    try {
      const doctorsRef = collection(firestore, 'doctor');
      const q = query(
        doctorsRef,
        where('areas_served', 'array-contains', zipCode),
        where('specialty', '==', specialty)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new Error('No doctors found');
      }

      const doctor = querySnapshot.docs[0].data(); // Highlight the first doctor
      if (querySnapshot.docs.length > 1) {
        additionalClass = 'hidden';
      } else {
        // doc_2 = querySnapshot.docs[1].data();
      }
      console.log(additionalClass);
      this.setState({ doctor, loading: false, add_class: additionalClass });

      console.log(doctor);
      // Automatically route to the doctor profile page
      // Assuming email is unique and used as ID
      // route(`/doctor/${doctor.email}`);
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
        // add_class: additionalClass,
      });
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({ userLocation: position.coords });
        },
        (error) => console.error(error)
      );
    }
  }

  calculateDistance(userCoords, doctorCoords) {
    // Implement a function to calculate distance
    // Placeholder for simplicity
    return '10 miles away';
  }

  render(_, { doctor, userLocation, loading, error, add_class, doc_2 }) {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    if (!doctor) {
      return <div>No doctor found.</div>;
    }

    const distance = userLocation
      ? this.calculateDistance(userLocation, doctor.location)
      : '(distance unknown)';

    const { specialty } = this.props;
    const { headlines, description } = specialistsData[specialty];

    return (
      <div className="cardiologist-near-you">
        <div className="header">
          <img src={DSOImage} alt="DSO Logo" className="logo" />
          <h1>{headlines}</h1>
          <p className="subtitle">({description})</p>
        </div>
        <div className="card-holder">
          <div className="doctor-card">
            <div className="card-header">
              <div className="photo-header">
                <img
                  src={doctor.doctor_picture}
                  alt="Doctor Avatar"
                  className="avatar"
                />
                <img
                  src="https://cdn-icons-png.freepik.com/256/6941/6941697.png"
                  alt="Crown Icon"
                  className="crown-icon"
                />
              </div>
              <div className="information-container">
                <div className="staff-pick-container">
                  {doctor.staff_pick && (
                    <span className="staff-pick">Staff pick</span>
                  )}
                  <p className="distance">{distance}</p>
                </div>
                <div className="details">
                  <h2 className="name">{doctor.name}</h2>
                  <h2 className="name">{doctor.practice_type}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="banner"></div>
        </div>
        <div className="services">
          <h3>Services: </h3>
          <p className="service-list">
            {doctor.Services.map((service, index) => [
              <span key={`${index}-span`} className={index === 0 ? 'bold' : ''}>
                {service}
              </span>,
              index !== doctor.Services.length - 1 && (
                <span key={`${index}-comma`}>, </span>
              ),
            ])}
          </p>
          <p className="insurance-status">
            Accepts insurance:
            <span className="yes"> Yes</span>
          </p>
        </div>
        <div className="cta-container">
          <a className="book-now" href={doctor.appointment_booking}>
            BOOK NOW
          </a>
        </div>
        <p className="guarantee">Backed by our 2nd opinion guarantee*</p>
        <p className="see-more">See more</p>
        <div className={`card-holder hidden`}>
          <div className="doctor-card cutoff">
            <div className="card-header">
              <div className="photo-header">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/doctorselect-b89b6.appspot.com/o/Doctors%2FIMG_0414-980x653.jpg"
                  alt="Doctor Avatar"
                  className="avatar"
                />
                <img
                  src="https://cdn-icons-png.freepik.com/256/6941/6941697.png"
                  alt="Crown Icon"
                  className="crown-icon"
                />
              </div>
              <div className="information-container ">
                <div className="staff-pick-container">
                  <span className="staff-pick">Great Alternative</span>
                  <p className="distance">(16 miles away)</p>
                </div>
                <div className="details">
                  <h2 className="name">Courtney May DDS</h2>
                  <h2 className="name">{doctor.practice_type}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="banner re-banner"></div>
        </div>
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

export default Specialist_to_ZipCode;
