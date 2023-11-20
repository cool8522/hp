// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCftjngPf3iDM2kT8gjvNiw5jIKBzfA4EQ",
  authDomain: "project-manager-8b683.firebaseapp.com",
  projectId: "project-manager-8b683",
  storageBucket: "project-manager-8b683.appspot.com",
  messagingSenderId: "770143492838",
  appId: "1:770143492838:web:005e5b0ad98a904b553927",
  measurementId: "G-BKTVQPT97T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth();
export{app,auth}
