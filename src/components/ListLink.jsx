import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';

const ListLink = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  const closeMenu = (e) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = window.innerHeight * 0.1;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', closeMenu);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  const navItems = ['home', 'about', 'service', 'skills', 'contact'];

  const baseClass =
    'tracking-wider px-4 py-1 rounded-full cursor-pointer font-base c-animate hover:bg-sky-200';

  const textColor = isScrolled
    ? 'text-gray-500 hover:text-sky-800'
    : 'text-gray-400 hover:text-sky-700';

  return (
    <div className='hidden md:flex space-x-2'>
      {navItems.map((item) => (
        <Link
          key={item}
          to={item}
          spy={true}
          activeClass='active-link'
          className={`${baseClass} ${textColor}`}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default ListLink;
