// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMsUf0jFmiPkKWHtoTMn4YCcj8AoBq95I",
  authDomain: "fir-auth-7b093.firebaseapp.com",
  projectId: "fir-auth-7b093",
  storageBucket: "fir-auth-7b093.firebasestorage.app",
  messagingSenderId: "771529369586",
  appId: "1:771529369586:web:e558a78e6f0efd623bad6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
