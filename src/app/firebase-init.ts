// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX6Mlhkhs019A94kkk-TKGcGoKMCCQUEM",
  authDomain: "fed-friend.firebaseapp.com",
  projectId: "fed-friend",
  storageBucket: "fed-friend.firebasestorage.app",
  messagingSenderId: "387920466580",
  appId: "1:387920466580:web:4c9fe4a541704c79355a81",
  measurementId: "G-6P3D181X2W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
