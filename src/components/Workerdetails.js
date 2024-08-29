import React, { useState } from 'react'
import './workdetails.css'
const Workerdetails = () => {
  const [category,setcategory]=useState([]);

  const cate=(newcategory)=>{
    setcategory([...category,newcategory])
  }
  return (
    <>
    <div className='body'>
    <div className='skill'> 
    <h1 >Skills</h1> </div>
    <div className='container6'>
    
    <h2>Tell us your top skills</h2>
    <p>This helps us recommended jobs for you</p>
    <div>
      <input type="text" placeholder='search a skill'/>
    </div>
    </div>

    <div className='grid'>
      <div className='category'>
      <div className='grid-1'>Select category</div>
      <p onClick={() => cate("Java")}>Java</p>
      <p onClick={()=>cate("web dev")}>web dev</p>
      <p onClick={()=>cate("design")}>design</p>
      <p onClick={()=>cate("portfolio")}>portfolio</p>
      </div>
      
      <div className='grid-1'> {category.length===0? ("No category Selcted"):(
      // category && <div>Category Selected : {category} </div>
      <>
      <p>Category selected</p>
     { category.map((item,index)=>{
        return <p key={index}>{item}</p>
      })}
      </>
      )}

          
      
      </div>
      <div className='grid-1'>Skills selected </div>
    </div>
<div className='btn-next'>
      <button className='next'>Next</button>
      </div>
     
      </div>
    </>
  )
}

export default Workerdetails
