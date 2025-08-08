import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaHeart, FaRegHeart, FaRegStar } from 'react-icons/fa'; // Mengimpor ikon dari React Icons

const Star = ({ isDipilih, onClick }) => {
  return (

    <motion.div
      whileTap={{ scale: 0.8 }}
      animate={{ y: [0, -10, 0], scale: [1, 1.2, 1] }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="cursor-pointer text-2xl"
      onClick={onClick}>
      {isDipilih ? (
        <FaStar className="text-yellow-300" />
      ) : (
        <FaRegStar className="text-gray-300" />
      )}
    </motion.div>

  );
};

const Love = () => {
  const [DiLike, setDiLike] = useState(false);
  const [AnimasiWaterdrop, setAnimasiWaterdrop] = useState(false);

  const handleClick = () => {
    setDiLike(!DiLike);
    setAnimasiWaterdrop(true);
    setTimeout(() => setAnimasiWaterdrop(false), 500);
  };

  return (
    <motion.div
      className="relative cursor-pointer text-2xl"
      whileTap={{ scale: 1.2 }}
      onClick={handleClick}>
      {AnimasiWaterdrop && (
        <motion.div initial={{ scale: 0, opacity: 1 }} animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }} className="absolute w-6 h-6 bg-rose-900 rounded-full"
        />
      )}

      {DiLike ? (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="text-rose-700 relative">
          <FaHeart />
        </motion.div>
      ) : (
        <div className="text-gray-300 relative">
          <FaRegHeart />
        </div>
      )}
    </motion.div>
  );
};

// 
const InteractiveIcons = ({ className }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className={`flex flex-row items-center space-x-5 mt-4 ${className}`}>

      <div className="flex space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <motion.div
            key={star}
            onClick={() => setRating(star)}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <Star isDipilih={star <= rating}/>
          </motion.div>
        ))}
      </div>

      <div className="flex space-x-2">
        <Love />
      </div>
    </div>
  );
};

export default InteractiveIcons;
