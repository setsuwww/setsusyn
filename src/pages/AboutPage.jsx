import { motion } from 'framer-motion'; // For smooth animations
import SkillBasic from '../components/SkillBasic';
import Judul from './../components/TittlePage';

const info = {
  title: 'About Me',
  intro: 'I’m Rifqi Ibrahim, a passionate Fullstack Developer and UI/UX enthusiast.',
  description: [
    'Currently a student at SMK Telekomunikasi Telesandi Bekasi, I specialize in crafting seamless digital experiences.',
    'Proficient in UI/UX design and frontend development with expertise in JavaScript frameworks.',
    'Experienced create a Web with JS Frontend Framewok like Vue, and React to build dynamic applications.'
  ]
};

const AboutPage = () => {
  return (
    <section className="bg-gradient-to-b from-sky-500 via-sky-300 to-white min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-5xl mx-auto py-12 sm:py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 border-dashed space-y-6 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
              <h1 className="text-xl md:text-4xl font-bold text-sky-900 mb-2">{info.title}</h1>
              <p className="text-xs md:text-sm text-sky-500 font-medium tracking-wide">{info.intro}</p>
            </motion.div>

            <hr className="border-t-2 border-sky-200 w-24 mx-auto md:mx-0" />

            <main className="space-y-3 text-gray-500 text-sm sm:text-base tracking-wide">
              {info.description.map((text, i) => (
                <motion.span key={i} className="block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}>
                  {text}
                </motion.span>
              ))}
            </main>

          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-4 bg-white p-8 rounded-2xl border-2 border-gray-200 border-dashed">
            <img src="/molecule.png" alt="" className="react w-1/2 h-1/2" />
            <article>
              <h1 className="text-2xl font-bold text-sky-900">React Powered</h1>
              <p className="text-sm font-base text-gray-500">React, Javascript Library use Hooks for state and perform management</p>
            </article>
          </div>
        </div>

        <motion.div className="mt-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}>
          <SkillBasic />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutPage;