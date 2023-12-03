
import React, { useState } from 'react';
import './NavbarStyles.css';
import MenuItems from './MenuItems';
import logoImage from '../images/logo1 (2).png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav className="NavbarItems">
      <img src={logoImage} alt="logo" className="logo_img" />
      <h1 className="navbar-logo">stayAwhile</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          );
        })}
        <li>
          <button >
          <Link to="/signin" className="signin_button">Sign Up</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}

