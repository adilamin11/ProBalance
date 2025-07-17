
import React from "react";
import { motion } from "framer-motion";
import pic2 from "../Image/photo2.jpg";
import pic3 from "../Image/photo3.jpg";

function AboutusUI() {
  return (
    <section className="w-full bg-[#f3f0ee] py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-full"
        >
          <img
            src={pic2}
            alt="About Us 1"
            className="w-[90%] rounded-3xl shadow-xl relative z-20 border-[8px] border-[#f3f0ee]"
          />
          <img
            src={pic3}
            alt="About Us 2"
            className="absolute top-[-50px] left-[60%] w-[70%] rounded-2xl shadow-2xl z-10 border-[6px] border-white hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Right Text Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-[#1e1e1e]">
            A Legacy Built on <br className="hidden md:block" /> Trust & Precision
          </h2>
          <p className="text-neutral-700 text-[17px] leading-relaxed">
            For decades, we've delivered unmatched quality with a commitment to detail,
            integrity, and passion. Our team thrives on building lasting relationships
            and exceeding expectations.
          </p>
          <p className="text-neutral-700 text-[17px] leading-relaxed">
            From vision to execution, we ensure every step reflects trust, innovation,
            and care—because your success is our legacy.
          </p>
          <button className="bg-[#9cd6ae] text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#7fc996] hover:scale-105 transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutusUI;
