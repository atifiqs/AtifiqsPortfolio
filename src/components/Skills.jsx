import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import DeveloperAvatar from '../assets/Developer-avatar.svg';
import { useMediaQuery } from 'react-responsive'; // for mobile detection

const skills = [
  { icon: <FaHtml5 />, title: 'HTML' },
  { icon: <FaCss3Alt />, title: 'CSS' },
  { icon: <FaJs />, title: 'JavaScript' },
  { icon: <FaReact />, title: 'React' },
  { icon: <FaGitAlt />, title: 'Git' },
];



const Skills = () => {
  const sectionRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 767 }); // 📱 Mobile check

  // Use different offset based on screen size
  const scrollOptions = {
    target: sectionRef,
    offset: isMobile
      ? ["0.5 1", "1 1"] // Start animation when section is half visible
      : ["start end", "end start"],
  };

  const { scrollYProgress } = useScroll(scrollOptions);

  // Desktop scroll: vertical motion
  const yDesktop = useTransform(scrollYProgress, [0, 1], [1, 460]);

  // Mobile scroll: move to small red circle and shrink
  const yMobile = useTransform(scrollYProgress, [0, 1], [1, 40]); // vertical move
  const xMobile = useTransform(scrollYProgress, [0, 1], [1, -120]); // horizontal move
  const scaleMobile = useTransform(scrollYProgress, [0, 1], [1, 0.4]); // shrink

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center flex-col bg-[#0f0f1c] py-10 px-4 text-white overflow-hidden"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        My Skills
      </h2>

      {/* 🌀 Scroll-following Avatar */}
      <motion.img
        src={DeveloperAvatar}
        alt="Developer Avatar"
        className="absolute z-20 top-[3rem] left-[9.2rem] md:top-[0.5rem] md:left-16 w-[8.5rem] h-[8.5rem] md:w-36 md:h-36 origin-top-left"
        style={
          isMobile
            ? { x: xMobile, y: yMobile, scale: scaleMobile }
            : { y: yDesktop }
        }
      />

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#1C1B29] rounded-xl p-6 flex flex-col items-center justify-center shadow-lg hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="text-4xl text-accent mb-2">{skill.icon}</div>
            <p className="text-sm md:text-base text-gray-200">{skill.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Download CV Button */}
      <motion.a
        href="/Muhammad-Atif-Iqbal-CV.pdf" // update filename accordingly
        download="Muhammad-Atif-Iqbal-CV.pdf"
        className="mt-10 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Download My CV
      </motion.a>

    </section>
  );
};

export default Skills;
