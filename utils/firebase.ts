import { initializeApp } from 'firebase/app';
import {getAnalytics} from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getDatabase} from "firebase/database";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRfxmzugRxD6VrZ7QCoYqiaaWrA8topdg",
  authDomain: "voxa-rn.firebaseapp.com",
  databaseURL: "https://voxa-rn-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "voxa-rn",
  storageBucket: "voxa-rn.firebasestorage.app",
  messagingSenderId: "326440922618",
  appId: "1:326440922618:web:f766e17b05619772254843",
  measurementId: "G-TJK7CLB02G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const db = getDatabase(app);
export default {app, analytics, auth, firestore, db};
