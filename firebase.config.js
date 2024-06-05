// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw9NG2TIa168DHdP6-bK8WB3ZjO6bO9Vo",
  authDomain: "galloflix-1c1b4.firebaseapp.com",
  projectId: "galloflix-1c1b4",
  storageBucket: "galloflix-1c1b4.appspot.com",
  messagingSenderId: "238878228164",
  appId: "1:238878228164:web:21bb45939c986e9b929391"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
export { db, auth };
