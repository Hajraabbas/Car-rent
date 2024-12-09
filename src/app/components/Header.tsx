import React from 'react';
import { FaHeart, FaBell, FaSearch, FaCog } from 'react-icons/fa';
import { VscSettings } from 'react-icons/vsc';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const IconButton = ({ href, icon: Icon, label }) => (
    <Link href={href}>
      <div
        className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center"
        title={label}
        aria-label={label}
      >
        <Icon className="text-lg md:text-xl text-gray-600 cursor-pointer" />
      </div>
    </Link>
  );

  return (
    <header className="bg-white py-4 px-4 md:px-8 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
        {/* Logo and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:space-x-8 w-full md:w-auto">
          {/* Logo */}
          <div className="text-xl md:text-2xl font-bold text-blue-600 flex-shrink-0">MORENT</div>

          {/* Search Bar */}
          <div className="relative w-full md:w-[492px] h-[44px] mt-2 md:mt-0">
            <input
              type="text"
              placeholder="Search something here"
              className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{ borderRadius: '70px' }}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <FaSearch />
            </div>
            <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
              <VscSettings />
            </div>
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center justify-between md:justify-end space-x-2 sm:space-x-4">
          <IconButton href="/favorites" icon={FaHeart} label="Favorites" />
          <IconButton href="/notifications" icon={FaBell} label="Notifications" />
          <IconButton href="/settings" icon={FaCog} label="Settings" />
          <Link href="/profile">
            <div
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden cursor-pointer"
              title="Profile"
              aria-label="Profile"
            >
              <Image src="/Profil.jpg" alt="Profile" width={40} height={40} priority />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
