import React from 'react';
import './ask.css';
import { useNavigate } from 'react-router-dom';
const Ask = () => {
  const url='https://cdn.vectorstock.com/i/1000x1000/97/67/manager-works-on-laptop-icon-flat-style-vector-27479767.webp'
const navigate =useNavigate();
const worker=()=>{
navigate('/fresherexperienced')
}

const hire=()=>{
  navigate('/hireexpert')
}

return (
    <>
     <h2 className='heading'>Select type</h2>
      <div className='container-5'>
       
      
        <div className='hire' onClick={hire}>
        <img src=" ./Images/hire.png"alt="Work" className='img' />

          I want to Hire
        </div>
        <div className='worker' onClick={worker}>
          <img src={url} alt="Work" className='img'  />
          I want to work
          
        </div>
      </div>
    </>
  );
}
export default Ask;
