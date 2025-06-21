import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-gradient-to-b from-[#111111] via-[#0f0f1c] to-[#1a1a2e] py-12 px-6 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Profile or Illustration */}
        <motion.img
          src="/profile.jpg" // Replace with your profile image path
          alt="About me"
          className="w-40 h-40 md:w-56 md:h-56 rounded-2xl object-cover border-4 border-gray-700 shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />

        {/* Text Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl text-center md:text-left md:text-3xl font-bold mb-4">About Me</h2>
          <p className="text-gray-300 text-center md:text-left text-sm md:text-base leading-relaxed">
            Hello! I'm <span className="text-accent font-semibold">Muhammad Atif Iqbal</span>, a passionate and ambitious individual with a strong drive to grow both in the <span className="text-accent font-semibold">tech industry</span> and in <span className="text-accent font-semibold">import/export and operational sectors</span>. I bring with me hands-on experience in <span className="text-accent font-semibold">operations, customs clearing, and accounting</span> from my role at <span className="text-accent font-semibold">Al-Faiz International</span>, where I’ve worked as an <span className="text-accent font-semibold">Operation Executive</span> and supported key functions in <span className="text-accent font-semibold">Import & Export</span> and <span className="text-accent font-semibold">Finance</span>.
            <br /><br />
            But my journey doesn’t stop there. I’m also actively pursuing my passion for technology. I specialize in <span className="text-accent font-semibold">Front-End Development</span>, building modern and responsive web interfaces using <span className="text-accent font-semibold">HTML, CSS, JavaScript</span>, and frameworks like <span className="text-accent font-semibold">React</span>. I’m currently sharpening my skills in <span className="text-accent font-semibold">Tailwind CSS</span> and <span className="text-accent font-semibold">Framer Motion</span> to craft visually stunning, smooth, and user-friendly experiences. I also have a good command over <span className="text-accent font-semibold">Git</span> for version control and collaborative development.
            <br /><br />
            My unique combination of skills enables me to thrive in both <span className="text-accent font-semibold">technical environments</span> and <span className="text-accent font-semibold">business operations</span>, making me a versatile candidate for roles in <span className="text-accent font-semibold">software houses</span> as well as <span className="text-accent font-semibold">import/export agencies or custom clearance firms</span>. I believe in continuous learning and adaptability, and I’m committed to delivering value wherever I work.
            <br /><br />
            I’m looking forward to opportunities that challenge me, help me grow, and allow me to contribute meaningfully—whether it’s through building beautiful web applications or ensuring smooth operations in a fast-paced business environment.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
