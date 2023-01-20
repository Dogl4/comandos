import * as React from 'react';
import { Dropdown } from './Dropdown';
import { MENU } from '../../constant/navbar';
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className="nav-bar flex w-100 bg-color-green bolder bg-font-white-20">
      <div className="flex title">
        {/* <Image src={logo} alt="logo" width={24} height={24} /> */}
        <Link href='/'><h3>Comandos</h3></Link>
      </div>
      <div className="flex">
        { MENU.map(({ TITLE, OPTIONS }) => (
          <Dropdown title={TITLE} options={OPTIONS} key={`key-${TITLE}`} />
        )) }
      </div>
    </div>
  );
}

export default NavBar;