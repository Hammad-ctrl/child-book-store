import React, { useState } from 'react';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { MdPerson,  MdMenu, MdClose } from 'react-icons/md';
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='border-l-0 border-t-0 border-r-0 pb-2 border-b-orange-200 shadow-md border'>
      <Banner />
      <div className="navbar w-[80%] mx-auto poppins-medium flex items-center justify-between">
        <div className="left-nav flex items-center gap-10">
          <div className="logo">
            <img src="./logo.jpg" className='w-20' alt="logo" />
          </div>
          <div className="hamburger md:hidden cursor-pointer" onClick={toggleMenu}>
            {isOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
          </div>
          {/* Desktop Menu */}
          <ul className={`hidden md:flex items-center gap-5`}>
            <li><Link to={'/'}>Our Books</Link></li>
            <li><Link to={'/'}>Kids</Link></li>
            <li><Link to={'/'}>Adults</Link></li>
            <li><Link to={'/'}>Occasion</Link></li>
            <li><Link to={'/'}>Theme</Link></li>
            <li><Link to={'/'}>Christmas</Link></li>
          </ul>
        </div>
        <div className="right-nav flex items-center gap-4">
          <div className="country border border-gray-200 px-2 py-1 hidden  rounded-md sm:flex items-center gap-1 cursor-pointer">
            <img src="./india.svg" width={25} alt="" />
            <span>IN</span>
          </div>
          <div className="search text-gray-700 cursor-pointer">
            <FaSearch size={21} />
          </div>
          <div className="profile text-gray-700 cursor-pointer">
            <MdPerson size={23} />
          </div>
          <div className="delete text-gray-700 cursor-pointer">
            <FaCartShopping size={23} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu flex flex-col items-center mt-4 md:hidden">
          <ul className='flex flex-col items-center gap-2'>
            <li><Link to={'/'} onClick={toggleMenu}>Our Books</Link></li>
            <li><Link to={'/'} onClick={toggleMenu}>Kids</Link></li>
            <li><Link to={'/'} onClick={toggleMenu}>Adults</Link></li>
            <li><Link to={'/'} onClick={toggleMenu}>Occasion</Link></li>
            <li><Link to={'/'} onClick={toggleMenu}>Theme</Link></li>
            <li><Link to={'/'} onClick={toggleMenu}>Christmas</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
