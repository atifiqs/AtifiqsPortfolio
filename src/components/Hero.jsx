import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaEnvelope } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'; // ✅ for screen size check

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // ✅ mobile screen check

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-br from-[#1a1a2e] via-[#0f0f1c] to-[#111111] text-white">
      <div className="flex flex-col md:flex-row md:justify-evenly items-center md:items-center gap-10 max-w-6xl w-full">

        {/* Profile Image */}
        <motion.img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 md:w-[18rem] md:h-[18rem] rounded-2xl object-cover border-4 border-white shadow-lg"
          initial={isMobile
            ? { opacity: 0, y: -30 }
            : { opacity: 0, x: -30 }}
          animate={isMobile
            ? { opacity: 1, y: 0 }
            : { opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />

        {/* Text Content */}
        <motion.div
          className="text-center md:text-left max-w-xl"
          initial={
            isMobile
              ? { opacity: 0, scale: 0.9 }       // ✅ Mobile: fade and scale
              : { opacity: 0, x: 30 }             // ✅ Desktop: fade and slide
          }
          animate={
            isMobile
              ? { opacity: 1, scale: 1 }
              : { opacity: 1, x: 0 }
          }
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Muhammad Atif Iqbal</h1>
          <p className="text-gray-300 mb-3 text-base md:text-lg">
            Operation Executive – Import & Export | Front-End Developer
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Managing import/export at Al-Faiz Intl. via PSW/Weboc. Skilled in trade compliance, docs, and cargo clearance. Also building modern UIs with React, Tailwind, and Framer Motion.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mt-4">
            <a href="mailto:atifiqbal0999@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="w-6 h-6 text-gray-300 hover:text-blue-400 transition" />
            </a>
            <a href="https://www.facebook.com/atif.s.iqs" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 text-gray-300 hover:text-blue-500 transition" />
            </a>
            <a href="https://github.com/atifiqs" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 text-gray-300 hover:text-white transition" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
