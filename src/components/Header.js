import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>

      <div className='header-logo'>
        <img src="/tekken-portal/img/tekken-logo.webp" alt="header-logo"></img>
      </div>

      <ul>
        <li><NavLink exact to="/">HOME</NavLink></li>
        <li><NavLink to="/characters">CHARACTERS</NavLink></li>
        <li><NavLink to="/players">PLAYERS</NavLink></li>
        <li><NavLink to="/tournaments">TOURNAMENTS</NavLink></li>
        <li><NavLink to="/leaderboard">LEADERBOARD</NavLink></li>
      </ul>
    </header>
  );
}

export default Header;
