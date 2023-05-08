// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOQO6mCUci-gaH1H594I0VoNZBwnP3jK4",
  authDomain: "sign-in-tutorial-89946.firebaseapp.com",
  projectId: "sign-in-tutorial-89946",
  storageBucket: "sign-in-tutorial-89946.appspot.com",
  messagingSenderId: "64987854428",
  appId: "1:64987854428:web:8fca610a32bd9dfb845899",
  measurementId: "G-99L9S9JEHT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
