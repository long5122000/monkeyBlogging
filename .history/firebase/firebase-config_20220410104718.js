import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD2hQ-ocGyP0yc2EqKN-OnlKZqzgUm27XE",
  authDomain: "monkey-blogging-41a6b.firebaseapp.com",
  projectId: "monkey-blogging-41a6b",
  storageBucket: "monkey-blogging-41a6b.appspot.com",
  messagingSenderId: "602792934537",
  appId: "1:602792934537:web:ae770361a69526c1591a58",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
