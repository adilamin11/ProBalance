import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const questions = [
  {
    question: "What services are included in the Basic Plan?",
    answer:
      "ProBalance offers bookkeeping, payroll processing, tax preparation, and financial consulting for businesses.",
  },
  {
    question: "Can I upgrade my plan as my business grows?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account dashboard.",
  },
  {
    question: "How does the custom plan work?",
    answer:
      "You can contact support via our Contact Us page or by emailing support@probalance.com.",
  },
  {
    question: "How do I get started with your services?",
    answer:
      "You can cancel your subscription at any time. However, we do not offer refunds for partial months.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 transition">
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full text-left"
      >
        <span className="text-lg font-semibold">{question}</span>
        {isOpen ? <X className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-neutral-700">{answer}</p>
      </div>
    </div>
  );
}

function QuestionUI() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#f3f0ee] w-full px-6 md:px-24 pt-20 pb-10 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold tracking-wider">Frequently Asked Questions</h1>
        <p className="text-neutral-600 mt-2">
          Get answers to the most common questions about our services.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-5">
        {questions.map((item, idx) => (
          <FAQItem
            key={idx}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === idx}
            onToggle={() => handleToggle(idx)}
          />
        ))}
      </div>
    </section>
  );
}

export default QuestionUI;
