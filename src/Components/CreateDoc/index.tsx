import React, { useState } from 'react'
import './index.scss';
import addDoc from '../../assets/addDoc.png'
import EditDoc from '../EditDoc';
import { createDoc } from '../../API/Firestore';
type isEditType = {
  isEdit  : boolean,
  handleEdit : () => void ,
  id:string ;
  docData : {
    value : string,
   title : string 
  }
}
export default function CreateDoc({isEdit,handleEdit,id,docData} : isEditType) {
  
  const createDocument  =  () => {
    let payload ={
      title : "Untitled", 
      value : "" ,
    };
     createDoc(payload) ;
  }
  //console.log(id) ;
  if(isEdit){
   return <EditDoc 
   docData={docData} 
   handleEdit={handleEdit} id={id}  />
  }
  return (
    <div className='new-doc-container'>
        <div className='new-doc-inner'>
        <p>Start a new document</p>
        <img src={addDoc} className='start-doc' onClick={() => {
          handleEdit() ;
          createDocument() ;
        }}
                 ></img>
        {/*<div className='start-doc'>
            <div className='start-doc-card'></div>
            <p>Blank </p>
        </div>*/}
         <p className='title'>Blank </p>
        </div>
    </div>
  )
}

