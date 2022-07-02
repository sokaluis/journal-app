// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWnIGpN2AB9sGs-NCYkNqyTYrM9YxkUYs",
  authDomain: "journal-material-de667.firebaseapp.com",
  projectId: "journal-material-de667",
  storageBucket: "journal-material-de667.appspot.com",
  messagingSenderId: "733518590009",
  appId: "1:733518590009:web:1f3096c01be7a67e6f5de8",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
