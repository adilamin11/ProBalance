import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function NavbarUI() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Service", "Price", "Blog"];

  return (
    <header className="px-6 md:px-20 sticky top-0 z-50 bg-[#f3f0ee] shadow-md border-b border-gray-200">
      <nav className="py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-[#2c2c2c]"
          >
            ProBalance
          </motion.h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-10 text-gray-700 text-[16px] font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-[#5e9c76] transition duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="bg-white px-4 py-2 rounded-lg hover:bg-gray-100 transition duration-200"
              >
                Cart (0)
              </a>
            </li>
            <li>
              <button className="bg-[#9cd6ae] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#86c69d] transition duration-300">
                Contact Us
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-[#f3f0ee] rounded-lg shadow-lg border-t border-gray-300 p-5 space-y-4"
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-base font-medium text-gray-800 hover:text-[#5e9c76] transition"
                >
                  {item}
                </a>
              ))}
              <a
                href="#"
                className="block bg-white px-4 py-2 rounded-lg text-center hover:bg-gray-100 transition"
              >
                Cart (0)
              </a>
              <button className="w-full bg-[#9cd6ae] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#86c69d] transition">
                Contact Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default NavbarUI;
