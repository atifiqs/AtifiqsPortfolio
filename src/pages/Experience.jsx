import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Operation Executive – Import & Export',
    company: 'Al-Faiz International',
    description:
      'Managing Import and Export processes including GD declaration on Pakistan Single Window (PSW). Specialized in accurate document handling, compliance, and smooth cargo clearance. Looking for freelance or full-time roles in international trade operations.',
    time: '2023 – Present',
  },
  {
    title: 'Freelance Front-End Web Developer',
    company: 'Self-employed',
    description:
      'Building modern and responsive websites using React, Tailwind CSS, and Framer Motion. Passionate about clean UI/UX and ready to work in software houses or remote web development teams.',
    time: '2024 – Present',
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1a1a2e] via-[#0f0f1c] to-[#111111] py-16 px-6 text-white flex items-center justify-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-[#1f1f2e] rounded-xl p-6 shadow-lg border border-gray-700"
            >
              <h3 className="text-xl font-semibold text-accent mb-1">{exp.title}</h3>
              <p className="text-gray-400 mb-2">{exp.company} • {exp.time}</p>
              <p className="text-gray-300 text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
