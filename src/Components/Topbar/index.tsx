
import './index.scss'
import docsIcon from '../../assets/docsicon.png'
type TopbarProps = {
    photoURL : string,
    handleLogout : () => void 
}
export default function Topbar({photoURL,handleLogout}:TopbarProps) {
  return (
    <div className = "top-bar">
      <div className='topbar-left'> 
        <img className = "docs-icon" src={docsIcon}/>
        <p className = "top-title" >Docs</p>
        </div>
        <div className='topbar-right'> 
       
        <a  onClick={handleLogout} className="btn btn-info btn-lg">
          <span className="glyphicon glyphicon-log-out"></span> Log out
        </a>
        <img className = "top-image" src={photoURL} />
        </div>
        
    </div>
  )
}
