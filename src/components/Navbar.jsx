import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Skills", to: "/skills" },
    { name: "Experience", to: "/experience" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-gradient-to-b from-[#1a1a2e] via-[#0f0f1c] to-[#111111] shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-white">
        <motion.h1 className="text-3xl md:text-4xl py-5 font-pacifico"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >Atif's IQs</motion.h1>
        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <Link to={link.to} className="hover:text-blue-400 transition">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden focus:outline-none"
        >
          {open ? (
            <HiOutlineX className="w-6 h-6" />
          ) : (
            <HiOutlineMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col items-center bg-[#111111] py-4 text-white font-medium gap-4 text-sm">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                onClick={() => setOpen(false)}
                className="hover:text-blue-400 transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
