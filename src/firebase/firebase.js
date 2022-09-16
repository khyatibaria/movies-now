import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD17ALNgblPjAlKlvP3pHYw6ftZCmKOVw4",
  authDomain: "movies-now-33222.firebaseapp.com",
  projectId: "movies-now-33222",
  storageBucket: "movies-now-33222.appspot.com",
  messagingSenderId: "552624759120",
  appId: "1:552624759120:web:44fe03d044dc218faf8c55",
  measurementId: "G-4YW53YR2CS",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export default db;
