import React from "react";
import adil from "../Image/adil.png"
import pic8 from "../Image/photo8.jpg";
import pic9 from "../Image/photo9.jpg";

function TeamUI() {
  return (
    <section className="w-full bg-[#e3dfdc] py-20 px-6 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
        <div className="space-y-3">
          <h2 className="text-4xl font-bold font-first text-[#2c2c2c]">
            Meet Our Expert Team
          </h2>
          <p className="text-neutral-700 max-w-md">
            Our leadership combines deep industry experience with innovative thinking to help businesses thrive and grow.
          </p>
        </div>
        <button className="bg-[#9cd6ae] text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-[#86c69d] transition duration-300">
          View All Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Team Member 1 */}
        <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden">
          <img
            src={pic9}
            alt="John Anderson"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">John Anderson, CPA</h3>
              <p className="text-sm text-neutral-500">Founder & CEO</p>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="bg-[#f3f0ee] px-3 py-1 rounded-full text-center">
                Financial Strategy
              </li>
              <li className="bg-[#f3f0ee] px-3 py-1 rounded-full text-center">
                Industry Leadership
              </li>
              <li className="bg-[#f3f0ee] px-3 py-1 rounded-full text-center">
                Business Development
              </li>
            </ul>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden">
          <img
            src={pic8}
            alt="Sarah Mitchell"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Sarah Mitchell, MBA</h3>
              <p className="text-sm text-neutral-500">Chief Financial Officer</p>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="bg-[#f3f0ee] px-3 py-1 rounded-full text-center">
                Financial Analysis
              </li>
              <li className="bg-[#f3f0ee] px-3 py-1 rounded-full text-center">
                Strategic Planning
              </li>
              <li className="bg-[#f3f0ee] px-3 py-1 rounded-full text-center">
                Operational Optimization
              </li>
            </ul>
          </div>
        </div>

        {/* Team Member 3 - Adil Rather */}
        <div className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-lg transition-all overflow-hidden">
          <img
            src={adil}
            alt="Adil Rather"
            className="w-full h-64 object-cover"
          />
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-xl font-semibold">Adil Rather</h3>
              <p className="text-sm text-neutral-500">MERN Stack Developer</p>
            </div>
            <ul className="space-y-2 text-sm text-neutral-700">
              <li className="bg-[#f3f0ee] px-3 py-1 rounded-full text-center">
                React & Node.js
              </li>
              <li className="bg-[#f3f0ee] px-3 py-1 rounded-full text-center">
                MongoDB & Express.js
              </li>
              <li className="bg-[#f3f0ee] px-3 py-1 rounded-full text-center">
                API Integration & UI Design
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamUI;
