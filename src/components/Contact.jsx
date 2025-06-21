import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    const form = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xpwrpzwa', {
        method: 'POST',
        body: form,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('Thanks for your message!');
        e.target.reset();
      } else {
        setStatus('Oops! Something went wrong.');
      }
    } catch (error) {
      setStatus('Error submitting form.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="h-screen bg-[#0f0f1c] px-4 py-8 flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Interested in working together? Fill out the form below or send me an email.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 text-left"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {['name', 'email', 'message'].map((field, idx) => (
            <motion.div
              key={field}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <label
                htmlFor={field}
                className="block text-sm font-semibold text-white mb-1 capitalize"
              >
                {field}
              </label>
              {field !== 'message' ? (
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  name={field}
                  id={field}
                  required
                  placeholder={field === 'email' ? 'you@example.com' : 'Your Name'}
                  className="w-full px-4 py-3 rounded-md bg-[#141427] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              ) : (
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 rounded-md bg-[#141427] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                />
              )}
            </motion.div>
          ))}

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 bg-[#33bfff] hover:bg-[#0ea5e9] text-white font-medium py-3 px-6 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading && (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4l-3 3 3 3H4z"
                  ></path>
                </svg>
              )}
              {loading ? 'Sending...' : 'Send Message'}
            </button>

          </motion.div>

          {status && (
            <motion.p
              className="text-center text-sm text-green-400 font-medium mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {status}
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
