import React, { useState } from 'react';

const Dropdown = ({ title, options }) => {
  const [visible, setVisible] = useState(false);

  const handleHover = () => {
    setVisible((prevVisible) => (prevVisible = !prevVisible));
  };

  return (
    <div className="nav-optin bg-color-green h-max-40 pl-1">
      <button
        id="fade-button"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`${Boolean(visible) ? 'bg-color-brown' : 'bg-color-green'} p-12-20 bolder bg-font-white-20`}
      >
        {title}
      </button>
      {!!options.length && (
        <ul
          className={`${Boolean(visible) ? 'block' : 'dn'} list-clear position-fixed bg-color-green-bolder p-0-3`}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          {options.map((option) => (
            <li key={`key-${option}`}>{option}</li>
          ))}
        </ul>
        )
      }
    </div>
  );
}

export default Dropdown;