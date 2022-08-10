import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5ltN1Pczp3rV1w-cBSaLBLqWLMjrU7io",
  authDomain: "tododata-80b6b.firebaseapp.com",
  projectId: "tododata-80b6b",
  storageBucket: "tododata-80b6b.appspot.com",
  messagingSenderId: "276429458417",
  appId: "1:276429458417:web:407e0a26c8c14d893d1250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

