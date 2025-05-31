import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBesqgfckHdZmIJOMrh3iOONgG4rfn2hCg",
  authDomain: "astrolearnafrica.firebaseapp.com",
  projectId: "astrolearnafrica",
  storageBucket: "astrolearnafrica.firebasestorage.app",
  messagingSenderId: "294634529385",
  appId: "1:294634529385:web:727991e7081a4e702778f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, RecaptchaVerifier, signInWithPhoneNumber, createUserWithEmailAndPassword, signInWithEmailAndPassword };

export { db };