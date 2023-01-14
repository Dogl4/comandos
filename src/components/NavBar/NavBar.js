import * as React from 'react';
import Image from "next/image";
import { Dropdown } from './Dropdown';
import logo from '../../../public/logo.png'
import { MENU } from '../../constant/navbar';

const NavBar = () => {
  return (
    <div className="nav-bar flex w-100 bg-color-green bolder bg-font-white-20">
      <div className="flex">
        {/* <Image src={logo} alt="logo" width={24} height={24} /> */}
        <h3>Comandos</h3>
      </div>
      <div className="flex">
        { MENU.map(({ TITLE, OPTIONS }) => (
          <Dropdown title={TITLE} options={OPTIONS} />
        )) }
      </div>
    </div>
  );
}

export default NavBar;