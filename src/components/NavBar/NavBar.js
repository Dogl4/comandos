import * as React from 'react';
import { Dropdown } from './Dropdown';
import logo from '../../../public/logo.png'
import Image from "next/image";

const NavBar = () => {
  return (
    <div className="nav-bar flex w-100 bg-color-green">
      <div className="flex">
        <Image src={logo} alt="logo" width={24} height={24} />
      </div>
      <div className="flex">
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
    </div>
  );
}

export default NavBar;