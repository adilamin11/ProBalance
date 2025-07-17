import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function FooterUI() {
  return (
    <footer className="w-full bg-[#050430] px-6 sm:px-10 md:px-20 py-20 text-white">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          ProBalance
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-start md:justify-end space-x-4"
        >
          <button className="bg-[#9cd6ae] px-6 py-2 rounded-lg font-semibold hover:bg-[#86c69d] transition duration-300">
            Contact
          </button>
          <button className="bg-[#e3a5ed] px-6 py-2 rounded-lg font-semibold hover:bg-[#d28ddf] transition duration-300">
            Pricing
          </button>
        </motion.div>
      </div>

      <hr className="border-neutral-600 my-10" />

      {/* Middle Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Newsletter</h3>
          <p className="text-neutral-300 mb-4">
            Stay updated with the latest insights and strategies.
          </p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full bg-[#211f50] text-neutral-200 placeholder:text-neutral-400 px-4 py-2 rounded-md outline-none"
            />
            <button
              type="submit"
              className="bg-[#9cd6ae] w-full py-2 rounded-md hover:bg-[#86c69d] transition-all font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-xl text-neutral-400 mb-4">Pages</h4>
          <ul className="space-y-2 text-neutral-300">
            <li>Home</li>
            <li>About</li>
            <li>Pricing</li>
            <li>Contact</li>
            <li>Team</li>
            <li>Team Details</li>
          </ul>
        </div>

        {/* CMS Pages */}
        <div>
          <h4 className="text-xl text-neutral-400 mb-4">CMS Pages</h4>
          <ul className="space-y-2 text-neutral-300">
            <li>Blog Posts</li>
            <li>Blog Single</li>
            <li>Service</li>
            <li>Service Detail</li>
            <li>Case Studies</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h4 className="text-xl text-neutral-400 mb-4">Utility Pages</h4>
          <ul className="space-y-2 text-neutral-300">
            <li>Style Guide</li>
            <li>Changelog</li>
            <li>Licenses</li>
            <li>Protected</li>
            <li>404 Not Found</li>
          </ul>
        </div>
      </div>

      <hr className="border-neutral-600 my-10" />

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-neutral-400 text-sm">
          © {new Date().getFullYear()} ProBalance. All rights reserved.
        </p>
        <div className="flex space-x-5 text-neutral-300">
          <a href="https://www.facebook.com/xaid.adil.714/" className="hover:text-[#9cd6ae] transition">
            <Facebook size={20} />
          </a>
          <a href="https://www.instagram.com/11adilamin" className="hover:text-[#9cd6ae] transition">
            <Instagram size={20} />
          </a>
          <a href="https://x.com/Adil11Rather?s=08" className="hover:text-[#9cd6ae] transition">
            <Twitter size={20} />
          </a>
          <a href="https://www.linkedin.com/in/adilamin11/" className="hover:text-[#9cd6ae] transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterUI;
