// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABjiNyBDFEGeHeUO2GWw2366Xhzzc516E",
  authDomain: "netfilxgpt-4c645.firebaseapp.com",
  projectId: "netfilxgpt-4c645",
  storageBucket: "netfilxgpt-4c645.appspot.com",
  messagingSenderId: "980012058326",
  appId: "1:980012058326:web:6381e4dc7cf5b1480f6b77",
  measurementId: "G-W6KYFSY4W9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();