import React, { useState } from 'react';

const Dropdown = () => {
  const [visible, setVisible] = useState(false);

  const handleHover = () => {
    setVisible((prevVisible) => (prevVisible = !prevVisible));
  };

  return (
    <div className="nav-optin bg-color-green bg-font-white-20 h-max-40 pl-1">
      <button
        id="fade-button"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`${Boolean(visible) ? 'bg-color-brown' : 'bg-color-green'} p-12-20`}
      >
        Dashboard
      </button>
      <ul
        className={`${Boolean(visible) ? 'block' : 'dn'} list-clear position-fixed bg-color-green-bolder p-0-3`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <li>Profile</li>
        <li>My account</li>
        <li>Logout</li>
      </ul>
    </div>
  );
}

export default Dropdown;