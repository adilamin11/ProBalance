import React from "react";
import { motion } from "framer-motion";
import { ChartNoAxesCombined } from "lucide-react";
import pic1 from "../Image/photo1.jpg";

function ContactusUI() {
  return (
    <section className="px-6 sm:px-10 md:px-20 bg-[#f3f0ee] py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center space-x-2 bg-[#d6d6fa] w-fit px-4 py-1.5 rounded-full mb-4 shadow">
            <ChartNoAxesCombined className="text-indigo-600" />
            <h4 className="text-sm font-medium">Every client growing 5X</h4>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight text-[#1f1f1f]">
            Expert financial <br /> solutions for your <br /> business success
          </h1>

          <p className="text-neutral-600 mt-5 text-base leading-relaxed">
            We provide tailored financial strategies that fuel business growth,
            ensure compliance, and maximize profitability across industries.
          </p>

          <button className="mt-6 bg-[#9cd6ae] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#86c69d] transition-all duration-300 shadow-md">
            Contact Us
          </button>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex justify-center items-center"
        >
          {/* Decorative Circle Background */}
          <div className="absolute bg-[#9cd6ae] w-72 h-72 rounded-full -z-10 right-10 top-10 blur-md opacity-70"></div>

          {/* Image */}
          <img
            src={pic1}
            alt="Contact Us"
            className="h-96 w-72 sm:h-[480px] sm:w-[350px] object-cover rounded-2xl shadow-2xl border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ContactusUI;
