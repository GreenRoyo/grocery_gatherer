// firebase.ts
import { initializeApp } from 'firebase/app';
import { addDoc, collection, deleteDoc, doc, getFirestore, onSnapshot, query, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD6HlJO9csoP2A_2unWdYvPlL_Q8XXSacU",
  authDomain: "grocerygatherer.firebaseapp.com",
  projectId: "grocerygatherer",
  storageBucket: "grocerygatherer.firebasestorage.app",
  messagingSenderId: "199703331521",
  appId: "1:199703331521:web:7972c9d0010ad6a9708a40",
  measurementId: "G-48DVN3RD3F"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { addDoc, collection, db, deleteDoc, doc, onSnapshot, query, updateDoc };

