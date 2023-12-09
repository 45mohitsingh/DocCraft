import React from 'react';
import { Button } from 'antd';
import './index.scss'
type ModalProps = {

  title : string,
  handleLogin : () => void 
}
const ModalComponent: React.FC<ModalProps> = ({title,handleLogin} : ModalProps) => {

  return (
    <>
    <div className="container">
  <div className="center">
  <Button size="large" type="primary" onClick={handleLogin}>
        {title}
      </Button>
  </div>
</div>
      
      
    </>
  ); 
};

export default ModalComponent ;