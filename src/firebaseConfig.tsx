
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth' 
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCA6iEcE_wT5Jivaknuo5jHPnqKO9gyR-w",
  authDomain: "docs-clone-79c97.firebaseapp.com",
  projectId: "docs-clone-79c97",
  storageBucket: "docs-clone-79c97.appspot.com",
  messagingSenderId: "434233391311",
  appId: "1:434233391311:web:1270dd4d6cbfbdfd6adfba",
  measurementId: "G-H7ELJG43QW"
};

export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firestore=getFirestore(app) ;
export const auth = getAuth(app) ;
//export const database = getFirestore(app) ;