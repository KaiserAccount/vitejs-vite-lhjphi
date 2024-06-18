import { h, Component } from 'preact';
import { firestore } from './firebase.js'; // Adjust the path as necessary
import { doc, getDoc } from 'firebase/firestore';

class DoctorProfile extends Component {
  state = {
    doctor: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    const { username } = this.props;
    try {
      const doctorRef = doc(firestore, 'doctor', username);
      const docSnap = await getDoc(doctorRef);

      if (!docSnap.exists()) {
        throw new Error('Doctor not a found');
      }

      const doctorData = docSnap.data();
      this.setState({ doctor: doctorData, loading: false });
    } catch (error) {
      this.setState({ error: error.message, loading: false });
    }
  }

  render({ username }, { doctor, loading, error }) {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return (
        <div>
          Error: {error}+{username}
        </div>
      );
    }

    return (
      <div>
        <h1>Doctor Profile</h1>
        {doctor && (
          <div>
            <h2>{doctor.name}</h2>
            <p>Email: {doctor.email}</p>
            {/* Other doctor data */}
          </div>
        )}
      </div>
    );
  }
}

export default DoctorProfile;
