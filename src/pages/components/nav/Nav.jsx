import React from 'react'
import "./Nav.css";

const Nav = ({ onLogout, pageName }) => {
  return (
    <div className="nav">
      <h1 className="logo">{pageName}</h1>
      <button className="nav-button clickable" onClick={onLogout}>Leave</button>
    </div>
  );
}

export default Nav