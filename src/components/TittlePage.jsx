import React from 'react';
import { motion } from 'framer-motion';

const Judul = ({ judul, keterangan }) => {
  return (
    <div className="text-center mb-12 mt-10">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight mt-4 relative"
        data-aos="zoom-in"
        data-aos-delay="200"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="wave-gradient" data-aos='zoom-in' data-aos-delay={30}>{judul}</span>
      </motion.h1>

      <p className="mt-4 text-gray-600 text-lg md:text-xl" data-aos="zoom-out" data-aos-delay="200">
        {keterangan}
      </p>
    </div>
  );
};

export default Judul;
