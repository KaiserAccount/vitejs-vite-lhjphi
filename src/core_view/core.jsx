import { h, Component } from 'preact';
import { firestore } from './../firebase.js'; // Adjust the path as necessary
// import { doc, getDoc } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { route } from 'preact-router';

class DoctorSearch extends Component {
  state = {
    doctor: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    const { specialty, zipCode } = this.props;
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
      setDoctorData(doctor);
      setLoading(false);
      this.setState({ doctor, loading: false });

      // Automatically route to the doctor profile page
      // Cool! routes to top doctor's page
      console.log(doctor);

      //      route(`/doctor/${doctor.email}`); // Assuming email is unique and used as ID
    } catch (error) {
      this.setState({ error: error.message, loading: false });
      // setError(error.message);
    }
  }

  render(_, { loading, error }) {
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return null; // Since we're auto-routing, we don't need to render anything here
  }
}

export default DoctorSearch;
