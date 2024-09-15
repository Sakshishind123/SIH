import React from 'react';
import './ask.css'; // Make sure this file includes the CSS above
import { useNavigate } from 'react-router-dom';
const Fresherexperienced = () => {

    const navigate=useNavigate()
    const working=()=>{
        navigate('/Workerdetails')
    }

    const fresher=()=>{
      navigate('/recommendation')
    }
  return (
    <div className='containersss'>
        <div className='box' onClick={working}>Experienced</div>
      <div className='box' onClick={fresher}>Fresher</div>
      
    </div>
  );
}

export default Fresherexperienced;
