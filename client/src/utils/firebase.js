// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-manager-ae3ab.firebaseapp.com",
  projectId: "task-manager-ae3ab",
  storageBucket: "task-manager-ae3ab.appspot.com",
  messagingSenderId: "408484286255",
  appId: "1:408484286255:web:0338bd5462e92282931bda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);