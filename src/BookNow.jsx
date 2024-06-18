import { h, Component } from 'preact';
import { firestore } from './firebase.js';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { route } from 'preact-router';

class BookNow extends Component {
  state = {
    doctor: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);
    const zipCode = urlParams.get('zip');
    const specialty = urlParams.get('specialty');

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
      this.setState({ doctor, loading: false });

      // Automatically route to the doctor profile page
      route(`/doctor/${doctor.email}`); // Assuming email is unique and used as ID
    } catch (error) {
      this.setState({ error: error.message, loading: false });
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

export default BookNow;

// // DoctorSelect.jsx
// import { h } from 'preact';

// const DoctorSelect = () => {
//   return (
//     <div>
//       <h1>Select a Doctor</h1>
//       {/* Add doctor selection UI here */}
//     </div>
//   );
// };

// export default BookNow;
