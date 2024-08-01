import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-item">
        <img src="https://img.icons8.com/ios-filled/50/000000/home.png" alt="Home" />
        <span>Home</span>
      </div>
      <div className="navbar-item">
        <img src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="Search" />
        <span>Search</span>
      </div>
      <div className="navbar-item">
        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-reel.png" alt="Reels" />
        <span>Reels</span>
      </div>
      <div className="navbar-item">
        <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="Profile" />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;
