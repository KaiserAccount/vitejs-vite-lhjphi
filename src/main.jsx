// main.jsx
import { h, render } from 'preact';
import { Router, Route } from 'preact-router';

import { Firestore, collection, addDoc } from '@firebase/firestore';

// import firebase from 'firebase/app';
// import { getAnalytics, logEvent, setCurrentScreen } from 'firebase/analytics'; // From the same source
import { logEvent } from '@firebase/analytics'; // Assuming you exported 'analytics'
import { analytics } from './firebase.js'; // Assuming you exported 'analytics'

// import { useEffect } from 'preact/hooks';

// // Create a new client
const firestore = new Firestore();

async function addSubscription(subscriptionData) {
  try {
    const docRef = await addDoc(
      collection(firestore, 'subscriptions'),
      subscriptionData
    );
    console.log('Document written with ID: ', docRef.id);
    return docRef.id; // Optionally return the ID of the created document
  } catch (error) {
    console.error('Error adding subscription: ', error);
    throw error; // Rethrow the error for handling elsewhere
  }
}

// addSubscription({ "card": 'MAx' });

logEvent(analytics, 'screen_view', { screen_name: 'doctor_profile' });

import EnterZipCode from './EnterZipCode.jsx';
// import DoctorSelect from './DoctorSelect.jsx';
import Call from './Call.jsx';
import DoctorProfile from './DoctorProfile.jsx';
import BookNow from './BookNow.jsx';
// import core from './core_view/core.jsx';
import Specialist_to_ZipCode from './Specialist_to_ZipCode.jsx';
//import CardiologistNearYou from '.CardiologistNearYou.jsx';
import CardiologistNearYou from './CardiologistNearYou.jsx';
import TermsOfService from './legal/terms.jsx';
import PrivacyPolicy from './legal/privacy-policy.jsx';
// import BookNow from './BookNow.jsx';

const App = () => {
  return (
    <div>
      <Router>
        <Route path="/" component={EnterZipCode} />
        {/* <Route path="/doctor-select" component={EnterZipCode} /> */}
        <Route path="/call" component={Call} />
        <Route path="/Find-a-Doctor/:specialty" component={EnterZipCode} />

        {/* <Route path="/doctor/:area" component={DoctorProfile} /> */}
        <Route path="/doctor/:username" component={DoctorProfile} />
        <Route path="/Book-Now/:zip" component={BookNow} />
        {/* <Route path="/:specialty/:zipCode" component={core} /> */}
        <Route path="/:specialty/:zipCode" component={Specialist_to_ZipCode} />

        <Route path="/CardiologistNearYou" component={CardiologistNearYou} />
        <Route path="/legal/terms" component={TermsOfService} />
        <Route path="/legal/privacy-policy" component={PrivacyPolicy} />

        {/* <Route path="/book-now/:zip" component={BookNow} />
        <Route path="/v1slug-test/" component={SlugTest} /> */}
      </Router>
    </div>
  );
};

render(<App />, document.getElementById('app'));

//
// Start Analytics

//const app = firebase.initializeApp(firebaseConfig);
// Initialize Firebase (Ensure you have your firebaseConfig)

// NEEDED
// const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Existing component imports and Firestore initialization...

// Custom Route Component for Tracking

// const TrackedRoute = ({ component: Component, path, ...rest }) => {
//   // Log page view on component mount (when route changes)
//   useEffect(() => {
//     setCurrentScreen(analytics, path.replace(/\//g, '_')); // Convert slashes to underscores for Firebase
//     logEvent(analytics, 'page_view', { page_path: path });
//   }, [path]);

//   return <Route path={path} component={Component} {...rest} />;
// };

// End Analytics

// // main.jsx
// import { h, render } from 'preact';
// //import { Router, Route } from 'preact-router';
// import EnterZipCode from './EnterZipCode.jsx';
// // import DoctorSelect from './DoctorSelect.jsx';
// // import Call from './Call.jsx';

// // const App = () => {
// //   return (
// //     <div>
// //       <Router>
// //         <Route path="/" component={EnterZipCode} />
// //         <Route path="/doctor-select" component={DoctorSelect} />
// //         <Route path="/call" component={Call} />
// //       </Router>
// //     </div>
// //   );
// // };

// const App = () => {
//   return (
//     <div>
//       <EnterZipCode />
//     </div>
//   );
// };

// render(<App />, document.getElementById('app'));
