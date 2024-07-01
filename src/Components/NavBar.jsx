import React, { useEffect } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdFastfood, MdShoppingCart } from 'react-icons/md';
import logo from '../assets/Images/MCDLogo.png';
import './NavBar.css';

const NavBar = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.pageX}px`;
      cursor.style.top = `${e.pageY}px`;
    });

    const navbarLinks = document.querySelectorAll('.navbar-link');
    const navbarButtons = document.querySelectorAll('.navbar-button');

    navbarLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(6)';
        cursor.style.opacity = 1;
      });

      link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.opacity = 0;
      });
    });

    navbarButtons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(6)';
        cursor.style.opacity = 1;
      });

      button.addEventListener('mouseleave', () => {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.style.opacity = 0;
      });
    });

    // Cleanup function
    return () => {
      cursor.remove();
      document.removeEventListener('mousemove', (e) => {
        cursor.style.left = `${e.pageX}px`;
        cursor.style.top = `${e.pageY}px`;
      });
    };
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="McDonald's Logo"
          className="logo"
        />
      </div>
      <div className="navbar-links">
        <a href="#items" className="navbar-link">
          <MdFastfood className="icon" /> <span>Items</span>
        </a>
        <a href="#deals" className="navbar-link">
          <span>Deals</span>
        </a>
        <a href="#about" className="navbar-link">
          <span>About Us</span>
        </a>
        <a href="#contact" className="navbar-link">
          <span>Contact</span>
        </a>
      </div>
      <div className="navbar-buttons">
        <button className="navbar-button order-now">
          <MdShoppingCart className="icon" /> Order Now
        </button>
        <button className="navbar-button location">
          <FaMapMarkerAlt className="icon" /> Location
        </button>
      </div>
    </div>
  );
}

export default NavBar;
