import React from "react";
import { MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";
import pic4 from "../Image/photo4.jpg";
import pic5 from "../Image/photo5.jpg";
import pic6 from "../Image/photo6.jpg";

const services = [
  {
    title: "Financial Statement Preparation",
    image: pic4,
  },
  {
    title: "Tax Planning and Preparation",
    image: pic5,
  },
  {
    title: "Bookkeeping Services",
    image: pic6,
  },
];

function ServicesUI() {
  return (
    <div className="w-full bg-[#e3dfdc] px-6 md:px-24 py-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-5">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 max-w-xl"
        >
          <h1 className="font-first text-4xl font-semibold">
            Customized Accounting Services
          </h1>
          <p className="text-neutral-700">
            From financial statements to tax planning and bookkeeping, we tailor
            each service to match your business goals with precision and care.
          </p>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#211f50] text-white font-semibold px-6 py-3 rounded hover:opacity-90 transition"
        >
          View All Services
        </motion.button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="rounded-2xl bg-[#f3f0ee] p-6 shadow hover:shadow-md hover:scale-[1.01] transition-transform"
          >
            <img src={service.image} alt={service.title} className="rounded-lg mb-5 w-full h-48 object-cover" />
            <h2 className="text-xl font-first font-semibold">{service.title}</h2>
            <div className="flex items-center gap-5 mt-5">
              <div className="bg-[#9cd6ae] rounded-full w-10 h-10 flex justify-center items-center">
                <MoveUpRight />
              </div>
              <div className="border-t border-neutral-500 w-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ServicesUI;
