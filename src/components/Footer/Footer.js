import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoOctcat from '../../../public/octcat.webp';

const Footer = () => {
  return (
    <div className="footer flex w-100 bg-color-green bolder bg-font-white-20">
      <div className="flex">
        <Link href='https://github.com/Dogl4/comandos'>
          <Image src={logoOctcat} alt="logoOctcat" width={18} height={18} />
        </Link>
      </div>
      <div className="flex">
        &#169; 2023
      </div>
    </div>
  );
}

export default Footer;