import React from 'react';
import { motion } from 'framer-motion';

const CubeEffect = ({ position }) => {
  return (
    <motion.img
      src="/kotakefek.png"
      alt="Cube"
      className="w-24 h-24 md:w-32 md:h-32"
      initial={{ y: 0 }}
      animate={{ y: -20 }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{ position: 'absolute', ...position }}
    />
  );
};

export default CubeEffect;
