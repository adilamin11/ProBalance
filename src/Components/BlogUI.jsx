import React from "react";
import pic10 from "../Image/photo10.jpg";
import pic11 from "../Image/photo11.jpg";
import pic12 from "../Image/photo12.jpg";
import { CalendarRange, Timer } from "lucide-react";
import { motion } from "framer-motion";

function BlogUI() {
  const blogPosts = [
    {
      title: "The Role of Financial Planning in Business Growth",
      image: pic10,
      date: "May 8, 2024",
      readTime: "9 min read",
      description:
        "Explore how strategic financial planning lays the foundation for scalable and sustainable growth in competitive markets.",
    },
    {
      title: "Trends and Technologies Shaping the Industry",
      image: pic12,
      date: "May 8, 2024",
      readTime: "10 min read",
      description:
        "Stay ahead of the curve with insights into the latest tools, innovations, and trends transforming business landscapes.",
    },
    {
      title: "The Importance of Financial Transparency in Success",
      image: pic11,
      date: "May 8, 2024",
      readTime: "5 min read",
      description:
        "Learn why openness in financial operations builds trust, improves decision-making, and drives long-term success.",
    },
  ];

  return (
    <section className="w-full bg-[#f3f0ee] py-20 px-6 md:px-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row justify-between items-center mb-12"
      >
        <div className="space-y-2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1f1f1f]">
            Explore Our Latest Articles
          </h1>
          <p className="text-neutral-600 text-base max-w-md">
            Curated insights to help you lead smarter, faster, and better.
          </p>
        </div>
        <button className="mt-6 md:mt-0 bg-[#9cd6ae] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#82c99a] transition-all duration-300 shadow-lg">
          View All Blogs
        </button>
      </motion.div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transform transition duration-300 overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5 space-y-3">
              <h2 className="text-xl font-semibold text-[#2c2c2c] leading-snug hover:text-[#4aaf8b] transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-sm text-neutral-600">{post.description}</p>
              <div className="flex justify-between items-center pt-3 border-t mt-4 text-sm text-neutral-500">
                <div className="flex items-center gap-2">
                  <CalendarRange size={18} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer size={18} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default BlogUI;
