import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../componemt/Heder';
import "./Home.css";

function Home() {
  return (
    <>
      <Header/>
        <div className="home-container">
          <p>Welcome to BakeryShop</p>
          <Link to="/insert"  className="insert-link">Go to Insert</Link>
      </div>
    </>
  );
}

export default Home;
