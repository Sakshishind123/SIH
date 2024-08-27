import React from 'react'
import'./basic.css'
import 'mdb-ui-kit/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Button } from 'bootstrap';
const Basic = () => {
  return (
    <>
    {/* <Login /> */}
<div className='container1'>

<nav className='container-main'>
<div className='navbar-content'>
   <div className='img'>
    <a tabindex="0" aria-live="assertive" class="ButtonElement" href="/" target="_self">
  <fl-logo>
    <picture>
    
      <source srcset="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg"/>
      
      <img alt="Freelancer logo" class="LogoImg" src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg" data-size="very-small" />
    </picture>

  </fl-logo>

</a>
</div>
<div className='nav-links'>
        <a href="#">Hire Experts</a>
        <a href="#">Get Hired</a>
        <a href="#">Why Choose Us</a>
        <a href="#">Enterprise</a>
      
</div>

<div className='search-bar'>
  <select id="primary-service-dropdown" className='service-dropdown'>
    <option value="">Select Service Category</option>
    <option value="development-it">Development and IT</option>
    <option value="ai-services">AI Services</option>
    <option value="graphics-design">Graphics and Design</option>
    <option value="writing-translation">Writing and Translation</option>
    <option value="sales-marketing">Sales and Marketing</option>
    <option value="finance">Finance</option>
    <option value="admin-support">Admin and Customer Support</option>
  </select> 
</div>

<div className='login-signup'>
<a href="/login" className='login'>Log In</a>
<a href="/signup" className='signup'>Sign Up</a>
</div>
</div>
</nav>


<div className='herosection'>
    <div className='content1'>
        <h1>Opportunities don't happen.<br />You create them.</h1>
        <h2>Seize the moment, take action, and shape your freelancing future.</h2>
        <button className="startbtn">Get Started Now</button>
    </div >
    <div className='image-container'>
   <img src="\images\i6.png"  />
</div>
</div>


</div>
<div className='container2'>
 <div className='world'>
   <h2 data-testid="verticals-title" >World-Class Talent</h2>
     
     <p>When you’re good at what you do, it’s worth it to find others at your level. At Toptal, we represent the top 3% of freelance talent in business, design, and&nbsp;technology.</p>
    
        </div>
       <div class="grid-container">
  <div class="grid-item"><p className='main'>Developers</p> <p className='para'>We connect full-stack engineers, DevOps experts, data scientists, and in-demand software developers with top Silicon Valley startups.</p></div>
  <div class="grid-item"><p className='main'>Designers</p><p className='para'> Join a network of expert UX, UI, interaction, and graphic designers as well as animators, illustrators, digital product designers, and more. </p></div>
  <div class="grid-item"><p className='main'>Finance Expert</p><p className='para'>Seasoned financial analysts, interim CFOs, and strategic consultants join Toptal to work on market sizing, startup funding, and valuations.</p></div>  
  <div class="grid-item"><p className='main'>Product Manager</p ><p className='para'>Digital PMs and scrum product owners join Toptal to build their careers in industries including healthcare, tech, and banking.</p></div>
</div>

      </div>

 <div className='flip-container'>    
<div class="flip-box">
  <div class="flip-box-inner">
    <div class="flip-box-front">
      <h2>Front Side</h2>
    </div>
    <div class="flip-box-back">
      <h2>Back Side</h2>
    </div>
  </div>
</div>
</div> 
    </>
  )
}

export default Basic
