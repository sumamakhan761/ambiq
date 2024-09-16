import React, { useState } from 'react';
import { FaTimes, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import backgroundImage from './logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search query:', searchQuery);
    // Implement search functionality here
    setIsSearchOpen(false);
  };

  const menuVariants = {
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    closed: { opacity: 0, x: '100%', transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  const menuItemVariants = {
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.15, duration: 0.5, ease: 'easeOut' }
    }),
    closed: { opacity: 0, x: 20, transition: { duration: 0.3 } }
  };

  const hamburgerVariants = {
    open: { x: 16, transition: { duration: 0.5, ease: 'easeInOut' } },
    closed: { x: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  const searchBarVariants = {
    open: { width: '100%', opacity: 1, transition: { duration: 0.3 } },
    closed: { width: '0%', opacity: 0, transition: { duration: 0.3 } }
  };

  return (
    <nav className="bg-opacity-80 text-blue fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-white flex-shrink-0">
          <img
        src={backgroundImage}
        alt="Background"
        className=" pt-3 pb-3 w-3/4 h-20 object-cover"
      />
          </div>
          <div className="flex-grow mx-4 flex items-center justify-end">
            <motion.div
              className="relative"
              initial="closed"
              animate={isSearchOpen ? 'open' : 'closed'}
              variants={searchBarVariants}
            >
              <form onSubmit={handleSearchSubmit} className="w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onClick={toggleSearch}
                  className="w-full bg-zinc-100 bg-opacity-50 text-white rounded-full py-2 px-3 pl-10 focus:outline-none focus:ring-2 focus:ring-zinc-300 cursor-pointer transition-all duration-300 ease-in-out"
                />
              </form>
            </motion.div>
            <button
              onClick={toggleSearch}
              className=" text-lg ml-2 p-1 text-white hover:text-gray-400 focus:outline-none cursor-pointer"
            >
              <FaSearch />
            </button>
          </div>
          <motion.div
            className="-mr-2 flex"
            variants={hamburgerVariants}
            animate={isOpen ? 'open' : 'closed'}
          >
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-gray-300 hover:bg-opacity-50 focus:ring-offset-2 focus:ring-offset-white focus:ring-white group"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-6 flex flex-col justify-center items-start space-y-2"
              >
                {isOpen ? (
                  <FaTimes className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <>
                    <motion.span
                      className="w-full h-0.5 bg-gray-400 rounded-full"
                      initial={{ width: '100%' }}
                      animate={{ width: '100%' }}
                    />
                    <motion.span
                      className="w-full h-0.5 bg-gray-400 rounded-full"
                      initial={{ width: '100%' }}
                      animate={{ width: '100%' }}
                    />
                  </>
                )}
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-16 right-0 w-full h-screen bg-gray-950 text-white bg-opacity-90 overflow-y-auto"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 grid grid-cols-2 gap-4">
              <div className="text-left">
                {['About Ambiq', 'AI', 'Blog', 'News', 'Events', 'Careers', 'Resources', 'Where To Buy'].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-700 hover:bg-opacity-50"
                    variants={menuItemVariants}
                    custom={index}
                    initial="closed"
                    animate="open"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
              <div className="text-left">
                {['Products', 'Applications', 'Technologies', 'Case Studies', 'Whitepaper', 'Support'].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-zinc-700 hover:bg-opacity-50"
                    variants={menuItemVariants}
                    custom={index + 8}
                    initial="closed"
                    animate="open"
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
