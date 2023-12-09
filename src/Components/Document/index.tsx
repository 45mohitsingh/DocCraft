import {useState} from 'react'
import './index.scss' ;
import Topbar from "../Topbar"
import CreateDoc from '../CreateDoc';
import { getCurrentDoc } from '../../API/Firestore';
import DocsList from '../DocsList';
export default function Document({photoURL,handleLogout}:TopbarProps) {
  const [isEdit,setIsEdit] = useState(false) ;
  const [id,setId] = useState("") ;
  const [docData,setDocData] = useState({
    value : "",
    title : ""
  }) ;
 //const getCurrentDocument = () =>{
 //   getCurrentDoc(id) ;
 // }
  const handleEdit = () => {
    setIsEdit(!isEdit) ;
    
  } ;
  const openDoc = (id: string,value : string, title : string) =>{
    setIsEdit(!isEdit) ;
    setId(id) ;
    setDocData({
      value,title
    }) ;
  };
  return (
    <div>
        <Topbar handleLogout = {handleLogout} photoURL = {photoURL} />
        <CreateDoc id={id} docData={docData} isEdit = {isEdit}  handleEdit={handleEdit}/>
        { isEdit ? <></> :<DocsList openDoc = {openDoc} />}
    </div>
  );
}
