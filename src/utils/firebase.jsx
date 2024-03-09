// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA4YZyDMYMCmQZgHHLBqTpHVjJfV_0Ljg",
  authDomain: "chatapp-a8081.firebaseapp.com",
  projectId: "chatapp-a8081",
  storageBucket: "chatapp-a8081.appspot.com",
  messagingSenderId: "267969057662",
  appId: "1:267969057662:web:b78e31b11b9792d6cc592f",
  measurementId: "G-TWH8GFYSZL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
