import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false); // tutup menu saat klik link
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Portofolio</div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <a href="#home" onClick={handleLinkClick}>Home</a>
        <a href="#about" onClick={handleLinkClick}>About</a>
        <a href="#skills" onClick={handleLinkClick}>Skills</a>
        <a href="#projects" onClick={handleLinkClick}>Projects</a>
        <a href="#contact" onClick={handleLinkClick}>Contact</a>
      </div>

      <div className="menu-toggle" onClick={handleToggle}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
