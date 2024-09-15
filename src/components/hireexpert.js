import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hireexpert = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark">
          <a className="navbar-brand" href="/">
            <fl-logo>
              <picture>
                <source srcSet="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg" />
                <img 
                  alt="Freelancer logo" 
                  className="logo-img" 
                  src="https://www.f-cdn.com/assets/main/en/assets/freelancer-logo-light.svg" 
                  data-size="very-small" 
                />
              </picture>
            </fl-logo>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#postJob"><font color="white">Post a Job</font></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#browseTalent"><font color="white">Browse Talent</font></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#support"><font color="white">Support</font></a>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" id="profileDropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="profile-icon.png" alt="Profile"/>
                </button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="profileDropdown">
                  <a className="dropdown-item" href="#profile">Profile</a>
                  <a className="dropdown-item" href="#hiredExperts">Hired Experts</a>
                  <a className="dropdown-item" href="#projects">Projects</a>
                  <a className="dropdown-item" href="#transactions">Transactions</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#logout">Log Out</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

        <div className="hero" id="postJob">
          <div className="form-container">
            <h1>Post a Job</h1>
            <form>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Job Title" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Job Description" rows="4"></textarea>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Skills Required" />
              </div>
              <div className="form-group">
                <input type="number" className="form-control" placeholder="Budget" />
              </div>
              <div className="form-group">
                <input type="date" className="form-control" placeholder="Deadline" />
              </div>
              <button type="submit" className="btn btn-primary btn-block">Post Job</button>
            </form>
          </div>
        </div>

        <div className="container mt-5">
          <h2 className="text-center">Why Hire on Freelancer?</h2>
          <p className="text-center">Access a global pool of talent, streamline your projects, and get work done efficiently.</p>
          <div className="row">
            <div className="col-md-4 text-center">
              <h4>Wide Talent Pool</h4>
              <p>Choose from experts in various fields to match your project needs.</p>
            </div>
            <div className="col-md-4 text-center">
              <h4>Cost-Effective</h4>
              <p>Get high-quality work done within your budget.</p>
            </div>
            <div className="col-md-4 text-center">
              <h4>Secure Payments</h4>00
              <p>Payments are held securely until you are satisfied with the work delivered.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hireexpert;
