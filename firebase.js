// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABI0VMxF2gWRG9Zc2JWgiyWcGdKxne-Js",
  authDomain: "react-notes-5e2f0.firebaseapp.com",
  projectId: "react-notes-5e2f0",
  storageBucket: "react-notes-5e2f0.appspot.com",
  messagingSenderId: "548605527904",
  appId: "1:548605527904:web:f7d0973a3fc4f657c3c005"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")