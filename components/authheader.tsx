import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/public/logo/logodocpilot5.png';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-red-800 from-20% via-cyan-400 via-40% to-cyan-500 to-90% text-black p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/" className="flex">
          <Image src={Logo} alt="DocPilot Logo" width={250} />
        </Link>
      </div>
      <nav className="flex space-x-10">
        <Link href="/Authentication/SignUp" className="hover:text-white text-black font-semibold">
          Sign Up
        </Link>
        <Link href="/Authentication/Login" className="hover:text-white text-black font-semibold">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
