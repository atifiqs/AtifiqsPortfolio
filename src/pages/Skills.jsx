import { motion } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import DeveloperAvatar from '../assets/Developer-avatar.svg';

const skills = [
  { icon: <FaHtml5 />, title: 'HTML' },
  { icon: <FaCss3Alt />, title: 'CSS' },
  { icon: <FaJs />, title: 'JavaScript' },
  { icon: <FaReact />, title: 'React' },
  { icon: <FaGitAlt />, title: 'Git' },
];

const Skills = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center flex-col bg-[#0f0f1c] py-10 px-4 text-white">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        My Skills
      </h2>
      <motion.img
        src={DeveloperAvatar}
        alt="Developer Avatar"
        className="absolute top-14 left-5 md:top-[5rem] md:left-10 w-14 h-14 md:w-36 md:h-36"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.1 }}

      />
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
