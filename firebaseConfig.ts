// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6HlJO9csoP2A_2unWdYvPlL_Q8XXSacU",
  authDomain: "grocerygatherer.firebaseapp.com",
  projectId: "grocerygatherer",
  storageBucket: "grocerygatherer.firebasestorage.app",
  messagingSenderId: "199703331521",
  appId: "1:199703331521:web:7972c9d0010ad6a9708a40",
  measurementId: "G-48DVN3RD3F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);