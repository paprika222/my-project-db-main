import React from 'react';
import Header from '../componemt/Heder';
import './About.css';

function About() {
  return (
    <>
      <Header/>
      <div className="home-container-about">
        <div>
          <h2>About</h2>
          <div className="person-container">
            <div className="person">
              <div className="person-details">
                <h3>Person 1</h3>
                <p>Name: นาย สุธิวัตร์ ศิริ</p>
                <p>Student ID: 6421600387</p>
                <p>Email: sutiwat.s@ku.th</p>
              </div>
            </div>
            <div className="person">
              <div className="person-details">
                <h3>Person 2</h3>
                <p>Name: น.ส.ปาริชาติ ยี่สุ่น รหันิสิต</p>
                <p>Student ID: 6421602614 </p>
                <p>Email: parichat.ye@ku.th</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
