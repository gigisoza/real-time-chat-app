import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_V0GL4LHIEq7e6C2avNhNvGNeRaShYzY",
  authDomain: "instantchat-71cbd.firebaseapp.com",
  projectId: "instantchat-71cbd",
  storageBucket: "instantchat-71cbd.appspot.com",
  messagingSenderId: "206478487212",
  appId: "1:206478487212:web:16fa2423c2537a1278f909",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
