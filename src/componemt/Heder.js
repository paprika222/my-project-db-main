import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';

function Header() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="logo-container">
            <Link to="/" className="logo-link" onClick={closeMobileMenu}>BakeryShop</Link>
          </div>
          <ul className={click ? "menu active" : "menu"}>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link to="/insert">Insert Desserts</Link>
            </li> 
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link to="/order">List Oder</Link>
            </li>
            <li className="menu-link" onClick={closeMobileMenu}>
              <Link to="/about">ABOUT</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;