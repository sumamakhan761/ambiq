
import './App.css';

import React from 'react';
import { motion } from 'framer-motion';


  

  import ParticlesComponent from './particles';

  const HomePage = () => {

    const textVariants = {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 },
      hover: { scale: 1.1, rotate: [0, 5, -5, 0] },
    };
  
    const textColorVariants = {
      light: { color: '#333' },
      dark: { color: '#ffffff' },
    };

    return (
      <div className="min-h-screen flex items-center justify-center ">
        <ParticlesComponent id="particles" />
        <motion.h1
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white"
          variants={textVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 10,
          }}
        >
          <motion.span
            variants={textColorVariants}
            animate="dark"
          >
            Hello everyOne
          </motion.span>
        </motion.h1>
      </div>
    );
  };

export default HomePage;

