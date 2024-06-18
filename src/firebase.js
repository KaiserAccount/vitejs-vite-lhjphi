// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlZBpPKDu8VpQMMA-aS3Bmja9D_fv922s',
  authDomain: 'doctorselect-b89b6.firebaseapp.com',
  projectId: 'doctorselect-b89b6',
  storageBucket: 'doctorselect-b89b6.appspot.com',
  messagingSenderId: '853902209784',
  appId: '1:853902209784:web:de6d4ed53782299d89010d',
  measurementId: 'G-D8XR60SXVQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const firestore = getFirestore(app);

// Initialize Analytics
const analytics = getAnalytics(app);

export { app, firestore, analytics };
