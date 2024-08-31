import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz3OWBHmsnBpxmV72V5ygnhwLiQp5v4OE",
  authDomain: "khanshop-6d553.firebaseapp.com",
  projectId: "khanshop-6d553",
  storageBucket: "khanshop-6d553.appspot.com",
  messagingSenderId: "99153518060",
  appId: "1:99153518060:web:04af6f453c976b94bef4c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export {app, auth, db};