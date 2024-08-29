import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCLT_V6EwneRGRPjEe4PkKqc1A92C1yjII",
    authDomain: "goodbye-letter.firebaseapp.com",
    projectId: "goodbye-letter",
    storageBucket: "goodbye-letter.appspot.com",
    messagingSenderId: "974922279363",
    appId: "1:974922279363:web:732ceabe2c0a8f4467b576",
    measurementId: "G-FP660VRTL8"
  };
  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);  // Firestore 초기화

export { app, auth };