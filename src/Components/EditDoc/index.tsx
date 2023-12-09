

import './index.scss'
import { useState,useRef,useEffect } from 'react';
import {BiArrowBack} from 'react-icons/bi' 
import ReactQuill from 'react-quill';
import EditorToolbar, { modules,formats } from '../../Toolbar';
import { editDoc,getCurrentDoc,deleteDocument } from '../../API/Firestore';
export default function EditDoc({handleEdit,id,docData} : functionInterface) {
    let quillRef = useRef<any>(null) ;
    const [value,setValue] = useState("") ;
    const [title,setTitle] = useState("") ;
    const [currentDocument,setCurrentDocument] = useState({
        title:"",
        value:""
    }) ;
    function editDocument(){
        let payload ={
            value,title
        } 
       
     editDoc(payload,id) ;
    }
    const handling = ()  => {
     // const jsonData = JSON.stringify(docData, null, 2);
      
        if(docData.title == "Untitled" && docData.value == ""){
            deleteDocument(id) ;
       }

     console.log( id) ;
            handleEdit() ;
    }
    useEffect(()=> {
     const debounced = setTimeout(() => {
        editDocument() ; 
     },2000);
     return () => clearTimeout(debounced);
    },[value,title]);
    const getCurrentDocument = () =>{
        getCurrentDoc(id,setCurrentDocument) ;
    }
    useEffect(() => {
       
       // setTitle(docData.title) ;
        getCurrentDocument() ;
       // setValue(docData.value) ;
     quillRef.current.focus() ;
    }, []);
  useEffect(()=>{
    setTitle(docData.title) ;
    setValue(docData.value) ;
  },[currentDocument])
    return (
   <div className='edit-container' >
    <BiArrowBack onClick={handling} size={30} className="react-icon" />
    <input onChange = {(event) => {
        setTitle(event?.target.value) ;
    }} value={title} className='title-input' placeholder='Untitled' />
    <div className='quill-container'>
        <EditorToolbar />
    <ReactQuill modules={modules} formats={formats}
     ref={quillRef} className ='react-quill' theme="snow" value={value} onChange={setValue} />
    </div>
   </div>
  )
}
