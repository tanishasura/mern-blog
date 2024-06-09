// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-79184.firebaseapp.com",
  projectId: "mern-blog-79184",
  storageBucket: "mern-blog-79184.appspot.com",
  messagingSenderId: "24448362393",
  appId: "1:24448362393:web:a0f5f6edbd5e8d9a931508"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);