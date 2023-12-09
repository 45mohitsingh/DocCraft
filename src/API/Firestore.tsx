import { auth, firestore } from "../firebaseConfig";
import { addDoc,collection,doc,updateDoc,getDocs,getDoc, deleteDoc} from "firebase/firestore";
  const docs = collection(firestore,'docs') ;
  type payloadType ={
    value : string,
    title : string
  }
  export const createDoc = (payload : payloadType) => {
    addDoc(docs,{...payload,userName : auth.currentUser?.displayName}) ;
  }
  export const getDocuments = (setDocs: any) => {
     getDocs(docs).then((response) => {
      setDocs(response.docs.map((doc)=> {
        console.log(doc.data()) ;
             return ({...doc.data(),id:doc.id}) ;
           
     }) );
    
        
  })
}
  export const editDoc = (payload : any,id : string) => {
    let docToEdit = doc(docs,id) ; 
    updateDoc(docToEdit,payload,id) ;
  }
  export const getCurrentDoc = (id : string,setCurrentDocument:any) => {
    let docToGet = doc(docs,id) ; 
    getDoc(docToGet).then((response) =>{
     // console.log(response);
      setCurrentDocument(response.data()) ;
    })
    .catch((err) =>{
      console.log(err) ; 
    })
  }
  export const deleteDocument=async (id : string) => {
    let docToDelete = doc(docs,id) ;
    await deleteDoc(docToDelete) ;
  }