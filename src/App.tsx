import React from 'react';
import { Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
     <h3 className="title">Michelle Pang</h3>
     <p className="subtitle">Hi! Welcome to my website. </p>
     <p>I'm currently a senior at the University of Pennsylvania, studying Computer Science and minoring in Fine Arts, expecting to graduate in May 2023. 
       My passion is developing meaningful products in a fast-paced environment. Some of my past experiences include software development at Meta, Stripe, and Trimble. 
     </p>
     <div className="links">
       <Link to="/files/resume.pdf" target="_blank" download>resume</Link>
       <Link to="https://www.linkedin.com/in/michelle-pang-82b636169/" target="_blank">LinkedIn</Link>
      </div>
    </div>
  );
}

export default App;
