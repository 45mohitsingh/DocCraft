import  {useState,useEffect} from 'react'
import { auth } from '../firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { NULL } from 'sass';
export default function useCheckAuth() {
    const [isAuthenticated,setIsAuth] = useState(false) ;
    const [userData,setUserData] = useState({
      photoURL : "",
    }) ;
    useEffect(() => {
        onAuthStateChanged(auth, (response:any) => {
         if(response){
          setUserData(response) ;
          setIsAuth(true) ;
         }
         else{
         // setUserData(NULL) ;
          setIsAuth(false) ;
         }
       }) ;
    },[]) ;
  return {isAuthenticated,userData} ;
    
}
