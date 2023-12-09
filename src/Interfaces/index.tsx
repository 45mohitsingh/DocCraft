interface TopbarProps {
    photoURL : string;
    handleLogout : () => void ;
}
interface functionInterface {
    id : string ; 
    handleEdit:() => void;
    docData : {
        value : string,
       title : string 
      }
}
interface setterDoc { 
    setDocs : Function ;
}