import React from 'react';
import './recommendation.css';
import { useNavigate } from 'react-router-dom';
const Recommendation = () => {
const navigate=useNavigate();
const skip=()=>{
    navigate('/Workerdetails');
}
  return (
    <>
      <div>
        <nav className="recommendation-navbar">
          <h1>Recommended Courses</h1>
          <ul className="recommendation-nav-links">
            <li><a href="#web-development">Web Development</a></li>
            <li><a href="#data-science">Data Science</a></li>
            <li><a href="#machine-learning">Machine Learning</a></li>
            <li><a href="#soft-skills">Soft Skills</a></li>
          </ul>
        </nav>

        <div className="recommendation-course-container">
          <div id="web-development" className="recommendation-course-category">
            <h2>Web Development</h2>
            <ul className="recommendation-course-list">
              <li className="recommendation-course-item">
                <a href="https://www.example.com/course1" target="_blank" rel="noreferrer">HTML & CSS Basics</a>
              </li>
              <li className="recommendation-course-item">
                <a href="https://www.example.com/course2" target="_blank" rel="noreferrer">JavaScript Fundamentals</a>
              </li>
              <li className="recommendation-course-item">
                <a href="https://www.example.com/course3" target="_blank" rel="noreferrer">React for Beginners</a>
              </li>
            </ul>
          </div>

          <div id="data-science" className="recommendation-course-category">
            <h2>Data Science</h2>
            <ul className="recommendation-course-list">
              <li className="recommendation-course-item">
                <a href="https://www.example.com/course4" target="_blank" rel="noreferrer">Python for Data Analysis</a>
              </li>
              <li className="recommendation-course-item">
                <a href="https://www.example.com/course5" target="_blank" rel="noreferrer">Introduction to Data Science</a>
              </li>
            </ul>
          </div>

          <div id="machine-learning" className="recommendation-course-category">
            <h2>Machine Learning</h2>
            <ul className="recommendation-course-list">
              <li className="recommendation-course-item">
                <a href="https://www.example.com/course6" target="_blank" rel="noreferrer">Machine Learning A-Z</a>
              </li>
              <li className="recommendation-course-item">
                <a href="https://www.example.com/course7" target="_blank" rel="noreferrer">Deep Learning Basics</a>
              </li>
            </ul>
          </div>

          <div id="soft-skills" className="recommendation-course-category">
            <h2>Soft Skills</h2>
            <ul className="recommendation-course-list">
              <li className="recommendation-course-item">
                <a href="https://www.example.com/course8" target="_blank" rel="noreferrer">Effective Communication</a>
              </li>
              <li className="recommendation-course-item">
                <a href="https://www.example.com/course9" target="_blank" rel="noreferrer">Time Management Skills</a>
              </li>
            </ul>
          </div>
          <button className="recommendation-btn" onClick={skip}>Skip</button>
        </div>
      </div>
    </>
  );
};

export default Recommendation;
