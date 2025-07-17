import React, { useState } from "react";
import { Rocket, Zap } from "lucide-react";

const plans = {
  monthly: [
    {
      icon: <Rocket className="p-3 size-14 rounded-lg bg-white" />,
      title: "Basic Plan",
      description: "Perfect for startup and small business",
      price: "$500",
      services: [
        "Book keeping and Monthly Financial",
        "Payroll Processing",
        "Basic tax preparation",
        "Email Support",
      ],
    },
    {
      icon: <Zap className="p-3 size-14 rounded-lg bg-white" />,
      title: "Standard Plan",
      description: "Ideal for growing business",
      price: "$1000",
      services: [
        "Book keeping and Monthly Financial",
        "Payroll Processing",
        "Basic tax preparation",
        "Email Support",
      ],
    },
    {
      icon: <Rocket className="p-3 size-14 rounded-lg bg-white" />,
      title: "Premium Plan",
      description: "Designed for established business",
      price: "$2000",
      services: [
        "Book keeping and Monthly Financial",
        "Payroll Processing",
        "Basic tax preparation",
        "Email Support",
      ],
    },
  ],
  yearly: [
    {
      icon: <Rocket className="p-3 size-14 rounded-lg bg-white" />,
      title: "Basic Plan",
      description: "Perfect for startup and small business",
      price: "$2500",
      services: [
        "Book keeping and Monthly Financial",
        "Payroll Processing",
        "Basic tax preparation",
        "Email Support",
      ],
    },
    {
      icon: <Zap className="p-3 size-14 rounded-lg bg-white" />,
      title: "Standard Plan",
      description: "Ideal for growing business",
      price: "$5000",
      services: [
        "Book keeping and Monthly Financial",
        "Payroll Processing",
        "Basic tax preparation",
        "Email Support",
      ],
    },
    {
      icon: <Rocket className="p-3 size-14 rounded-lg bg-white" />,
      title: "Premium Plan",
      description: "Designed for established business",
      price: "$10000",
      services: [
        "Book keeping and Monthly Financial",
        "Payroll Processing",
        "Basic tax preparation",
        "Email Support",
      ],
    },
  ],
};

function PriceCard({ icon, title, description, price, services }) {
  return (
    <div className="bg-[#e3dfdc] rounded-xl p-6 shadow-sm">
      {icon}
      <div className="mt-5">
        <h2 className="text-2xl font-semibold font-mono">{title}</h2>
        <p className="text-neutral-600">{description}</p>
        <div className="flex items-end mt-4 font-bold">
          <h3 className="text-3xl">{price}/</h3>
          <span className="text-lg">month</span>
        </div>
        <button className="w-full bg-[#9cd6ae] p-2 mt-4 rounded-lg font-semibold hover:bg-[#86c69d] transition">
          Get started
        </button>
        <div className="mt-5 bg-white p-5 rounded-lg">
          <h4 className="mb-3 text-lg font-semibold">Services Included:</h4>
          <ul className="list-disc list-inside space-y-2 text-sm">
            {services.map((service, idx) => (
              <li key={idx}>{service}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function PricePlaneUI() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <section className="bg-[#f3f0ee] py-20 px-6 md:px-24">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-3">
          Choose the right plan for your business
        </h1>
        <p className="text-xl text-neutral-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <div className="bg-[#e3dfdc] p-2 rounded-lg flex gap-2">
          {["monthly", "yearly"].map((tab) => (
            <button
              key={tab}
              className={`w-28 py-1.5 rounded-lg transition font-semibold ${
                activeTab === tab
                  ? "bg-[#211f50] text-white"
                  : "bg-white text-black"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {plans[activeTab].map((plan, index) => (
          <PriceCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}

export default PricePlaneUI;
