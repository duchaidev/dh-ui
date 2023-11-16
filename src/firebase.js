// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCANfU3qpEHTR8IRl5Lu6xjsucOtB5MNJ4",
  authDomain: "dhui-1a262.firebaseapp.com",
  projectId: "dhui-1a262",
  storageBucket: "dhui-1a262.appspot.com",
  messagingSenderId: "207825037273",
  appId: "1:207825037273:web:ad223c45f93545427adbc8",
  measurementId: "G-JRGKHYCCLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
