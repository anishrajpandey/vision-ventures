// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbHadhDFoytNHcEQo_pjZweDgfwJ11SJQ",
  authDomain: "visionventures-b8ed4.firebaseapp.com",
  projectId: "visionventures-b8ed4",
  storageBucket: "visionventures-b8ed4.appspot.com",
  messagingSenderId: "669172389906",
  appId: "1:669172389906:web:fb6c768554966d063060cb",
  measurementId: "G-QJVMCKHK6N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
