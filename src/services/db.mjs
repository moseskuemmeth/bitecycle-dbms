// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBILsZzbH6M5ws1H4bgQJZcwppNr_JVRY",
  authDomain: "bitecycle-7e074.firebaseapp.com",
  projectId: "bitecycle-7e074",
  storageBucket: "bitecycle-7e074.appspot.com",
  messagingSenderId: "767409359979",
  appId: "1:767409359979:web:7e8bd13fd49011c012f52e",
  measurementId: "G-RX9XWHXJLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
