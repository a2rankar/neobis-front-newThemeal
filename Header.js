
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">The Meal</Link>
    </header>
  );
}

export default Header;
