import React from 'react';
import './findjob.css'
const FindJob = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <h1 className="logo-title">Hilancing</h1>
          <nav className="main-nav">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="#" className="nav-link">Home</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Find Work</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Deliver Work</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Manage Finances</a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">Messages</a>
              </li>
              <li className="nav-item nav-dropdown">
                <a href="#" className="dropdown-toggle nav-link">Account</a>
                <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <a href="#" className="dropdown-link">Account Settings</a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#" className="dropdown-link">Logout</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section className="hero-section">
          <div className="hero-container">
            <h2 className="hero-title">Find the Perfect Job or Freelancer</h2>
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Search for jobs or freelancers"
              />
              <button className="search-button">Search</button>
            </div>
            <div className="filter-options">
              <label htmlFor="category" className="filter-label">
                Category:
              </label>
              <select id="category" className="category-select">
                <option value="all">All</option>
                <option value="web-development">Web Development</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="writing">Writing</option>
              </select>
              <label htmlFor="budget" className="filter-label">
                Budget:
              </label>
              <input
                type="range"
                id="budget"
                className="budget-slider"
                min="0"
                max="1000"
                step="10"
              />
              <span id="budget-value" className="budget-value">
                Rs 0
              </span>
            </div>
          </div>
        </section>
        <section className="featured-jobs-section">
          <div className="featured-jobs-container">
            <h2 className="featured-jobs-title">Featured Jobs</h2>
            <div className="jobs-carousel">
              <div className="carousel-item">
                <div className="job-card">
                  <h3 className="job-title">React/Python Developer</h3>
                  <p className="job-details">
                    Fixed-price - Entry level - Est. Budget: $20
                  </p>
                  <p className="job-description">Details about the job...</p>
                  <button className="apply-btn">Apply Now</button>
                </div>
              </div>
              <div className="carousel-item">
                <div className="job-card">
                  <h3 className="job-title">Python Backend Expert</h3>
                  <p className="job-details">
                    Fixed-price - Entry level - Est. Budget: $20
                  </p>
                  <p className="job-description">Details about the job...</p>
                  <button className="apply-btn">Apply Now</button>
                </div>
              </div>
              {/* Add more carousel items as needed */}
            </div>
          </div>
        </section>
        <section className="job-listings-section">
          <div className="job-listings-container">
            <h2 className="job-listings-title">Jobs You Might Like</h2>
            <div className="job-card">
              <h3 className="job-title">React/Python Developer</h3>
              <p className="job-details">
                Fixed-price - Entry level - Est. Budget: Rs 20
              </p>
              <p className="job-description">
                Looking for a skilled developer to help with a project using
                Django and React. Must have experience with authentication and
                SSO.
              </p>
              <button className="apply-btn">Apply Now</button>
            </div>
            <div className="job-card">
              <h3 className="job-title">Python Backend Expert</h3>
              <p className="job-details">
                Fixed-price - Entry level - Est. Budget: Rs 20
              </p>
              <p className="job-description">
                Need to connect Flask code with Django user management system
                and control output limits.
              </p>
              <button className="apply-btn">Apply Now</button>
            </div>
            {/* Add more job cards as needed */}
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <p className="footer-text">&copy; 2024 Hilancing. All rights reserved.</p>
        </div>
      </footer>
      <div id="live-chat" className="live-chat-container">
        <div className="chat-header">
          <span className="chat-title">Live Chat</span>
          <button id="chat-close" className="chat-close-btn">×</button>
        </div>
        <div className="chat-body">
          <div className="chat-message">
            <p className="chat-text">
              Welcome to Hilancing! How can we assist you today?
            </p>
          </div>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            className="chat-input"
            placeholder="Type a message..."
          />
          <button className="chat-send-btn">Send</button>
        </div>
      </div>
    </>
  );
};

export default FindJob;
