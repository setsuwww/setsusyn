import { FaArrowRight, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import ListLink from './ListLink';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-6">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
          <div className="flex items-start space-y-4 w-full md:w-auto" data-aos='fade-down' data-aos-delay={300}>
            <p className="text-gray-600 text-lg max-w-xs md:max-w-sm mx-auto">
            Welcome to My Portfolio! I crafted this using React and Tailwind CSS, This platform serves as an introduction to my work and CV.
            </p>
          </div>
        </div>

        <hr className="border-t-2 border-gray-200 my-8" />

        <div className="flex justify-center mt-6 space-x-4">
          <a href="https://github.com" className="text-sky-600 hover:text-sky-800 transition-colors duration-300">
            <FaGithub className="h-10 w-10 border-2 border-sky-200 rounded-lg p-2 hover:text-sky-50 hover:bg-sky-900 hover:border-sky-900 hover:scale-125 transform duration-200" data-aos='fade-right' data-aos-delay={600} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
