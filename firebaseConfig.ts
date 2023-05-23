import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
//import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
// import {getFirestore} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCM8SvIP5OaWiLCjoP_jmZiFaY9KqCyouU",
    authDomain: "lab11tsx.firebaseapp.com",
    databaseURL: "https://lab11tsx-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "lab11tsx",
    storageBucket: "lab11tsx.appspot.com",
    messagingSenderId: "485516940409",
    appId: "1:485516940409:web:16beb3917c753febb9f0a8"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_DB = getDatabase(FIREBASE_APP)
// export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
// export const FIRESTORE_AUTH = getAuth(FIREBASE_APP)