// from </> part of firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// from firestore noSQL database
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCk3vGHZzoNTtndk18sk8aO5yUSao89FHk",
  authDomain: "bibbity-bops.firebaseapp.com",
  projectId: "bibbity-bops",
  storageBucket: "bibbity-bops.appspot.com",
  messagingSenderId: "277481272439",
  appId: "1:277481272439:web:4f6dcee9b6ab35dc4a8272",
  measurementId: "G-6KZCMLR6DT",
};

// Initialize Firebase
// create a variable named app
// pass in the configuration for the specific project to initializeApp function
// app is now the variable that connects this app with all the firebase services
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);

// analytics is not that important unless a full app is deployed
// const analytics = getAnalytics(app);
