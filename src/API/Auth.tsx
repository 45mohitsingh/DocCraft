import { auth } from "../firebaseConfig" 
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup,signOut } from "firebase/auth";
let provider = new GoogleAuthProvider() ;
export const loginWithGoogle = ()=> {
    signInWithPopup(auth,provider) ;
    /*signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Logged In", result);
    })
    .catch((error) => {
      console.log("Caught error Popup closed");
    });*/
};
export const SignOut = () => {
  signOut(auth) ;
}
   export const authCheck = () => {
    onAuthStateChanged(auth, (response) => {
         console.log(response) ;
    }) ;
   } ;