import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA5_mLv3p7VJGsoPfemv3vsDbdADr5FWjo",
  authDomain: "newcomma2-1f4d1.firebaseapp.com", // Changed authDomain
  projectId: "newcomma2-1f4d1",
  databaseURL: "https://newcomma2-1f4d1-default-rtdb.europe-west1.firebasedatabase.app", // Added databaseURL
  storageBucket: "newcomma2-1f4d1.appspot.com",
  messagingSenderId: "804566204601",
  appId: "1:804566204601:web:cb145522537f9a01ee1b68"
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth(app);

