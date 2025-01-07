import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAjYRML4UH4fq3IPWF5Fm5F2EcP64YQ0k",
  authDomain: "coding-platform-be787.firebaseapp.com",
  projectId: "coding-platform-be787",
  storageBucket: "coding-platform-be787.firebasestorage.app",
  messagingSenderId: "31241840836",
  appId: "1:31241840836:web:16a1422fc6e5a5c6750191",
  measurementId: "G-EDYPS06HBQ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { app, db }; // Export Firestore instance
