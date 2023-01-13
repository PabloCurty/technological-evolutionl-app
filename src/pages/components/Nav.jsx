import React from 'react'

const Nav = ({onLogout}) => {
  return (
    <div className="nav">
      <h1 className="logo">MyExperiences</h1>
      <button onClick={onLogout}>Leave</button>
    </div>
  );
}

export default Nav