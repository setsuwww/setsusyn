import React from 'react';
import { motion } from 'framer-motion';

const TypingEffect = ({ text }) => {

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, type: 'spring', stiffness: 100 },
    }),
  };

  return (
    <h1 className="text-5xl md:text-7xl font-bold text-sky-200 mb-4 text-nowrap">
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          initial="hidden"
          animate="visible"
          custom={index}
          className="inline-block"
        >
          {char}
        </motion.span>
      ))}
    </h1>
  );
};

export default TypingEffect;
