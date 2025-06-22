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
      

      {/* 🌀 Scroll-following Avatar */}
      <div className="relative w-full h-[10rem] flex justify-center items-start md:hidden">
        <motion.img
          src={DeveloperAvatar}
          alt="Developer Avatar"
          className="z-20 w-[8rem] h-[8rem] origin-top-left"
          style={{ x: xMobile, y: yMobile, scale: scaleMobile }}
        />
      </div>
      <motion.img
        src={DeveloperAvatar}
        alt="Developer Avatar"
        className="hidden md:block absolute top-[0.5rem] left-16 w-36 h-36 origin-top-left"
        style={{ y: yDesktop }}
      />
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        My Skills
      </h2>

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

      

    </section>
  );
};

export default Skills;
