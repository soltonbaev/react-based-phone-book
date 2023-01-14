import React from 'react';
import './About.css';
const About = () => {
   return (
      <div className="tabs__about-wrapper">
         <h2>About this app:</h2>
         <p>App was made using React Library</p>
         <p>Following React packages were used:</p>
         <ul>
            <li>Context</li>
            <li>Router React Dom</li>
            <li>Axios</li>
         </ul>
      </div>
   );
};

export default About;
