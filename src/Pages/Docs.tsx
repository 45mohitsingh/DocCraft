import React from 'react'
import ModalComponent from '../Components/Button/index';
import { loginWithGoogle,SignOut } from '../API/Auth';
import useCheckAuth from '../Hooks/useCheckAuth';

import Document from '../Components/Document';
const Docs : React.FC = () => {

  const handleLogin = () => {
    loginWithGoogle() ;
  }
  const handleLogout = () => {
    //loginWithGoogle() ;
    SignOut() ;
  }
  let {isAuthenticated,userData} = useCheckAuth() ;
  // console.log(userData) ;
  
  return (
    <div className='docs-container '>
        {!isAuthenticated ? <ModalComponent title="Login with Google"  handleLogin = {handleLogin}></ModalComponent> :
         <Document handleLogout = {handleLogout} photoURL = {userData.photoURL} />
        
      }
    </div>
  )
}
export default Docs ;