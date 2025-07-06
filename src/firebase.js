// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// 👉 Replace with your Firebase project config
const firebaseConfig = {
 apiKey: "AIzaSyA41lypNNDqx8OVe6XcKqYqVbzJj6ldShI",
  authDomain: "earthxway-foundation.firebaseapp.com",
  projectId: "earthxway-foundation",
  storageBucket: "earthxway-foundation.firebasestorage.app",
  messagingSenderId: "537203599414",
  appId: "1:537203599414:web:e4d23cfa323432eded9097",
  measurementId: "G-XE304WLJ0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth and Firestore
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
