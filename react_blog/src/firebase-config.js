// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_aOFFUsIUcwLxFVa1HY0xvBnIyyiLPFE",
  authDomain: "newblogproject-d7a0b.firebaseapp.com",
  projectId: "newblogproject-d7a0b",
  storageBucket: "newblogproject-d7a0b.appspot.com",
  messagingSenderId: "459048647275",
  appId: "1:459048647275:web:3594411843db1b699a0f2e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// console.log(auth);
// console.log(provide);
// console.log(db);
