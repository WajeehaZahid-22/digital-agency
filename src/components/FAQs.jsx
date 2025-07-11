// src/components/FAQsAndComments.jsx
import React from 'react';

const FAQs = () => {
  return (
    <section className="bg-white text-black py-16 px-4 md:px-12 lg:px-24">
      {/* FAQs Section */}
      <div className="text-center mb-12">
        <h6 className="text-black font-semibold text-3xl uppercase tracking-wide">FAQ's</h6>
        <h2 className="text-2xl md:text-4xl text-gray-500 mt-2">Frequently Asked Questions</h2>
      </div>

      <div className="max-w-3xl mx-auto space-y-4 mb-16">
        {/* FAQ Item */}
        <div className="border border-lime-400 rounded-xl overflow-hidden">
          <div className="px-4 py-3 flex justify-between items-center bg-[#111111] text-white rounded-t-xl">
            <span className="font-medium">What services do you offer?</span>
            <span className="text-lime-400 text-xl">+</span>
          </div>
          <div className="px-4 py-3 bg-[#1a1a1a] text-gray-300 rounded-b-xl">
            We provide on-demand design services including UI/UX, branding, web design, and more.
          </div>
        </div>

        <div className="border border-lime-400 rounded-xl overflow-hidden">
          <div className="px-4 py-3 flex justify-between items-center bg-[#111111] text-white rounded-t-xl">
            <span className="font-medium">How fast is your turnaround time?</span>
            <span className="text-lime-400 text-xl">+</span>
          </div>
          <div className="px-4 py-3 bg-[#1a1a1a] text-gray-300 rounded-b-xl">
            Typically 2–3 business days depending on the task complexity.
          </div>
        </div>

        <div className="border border-lime-400 rounded-xl overflow-hidden">
          <div className="px-4 py-3 flex justify-between items-center bg-[#111111] text-white rounded-t-xl">
            <span className="font-medium">Can I cancel anytime?</span>
            <span className="text-lime-400 text-xl">+</span>
          </div>
          <div className="px-4 py-3 bg-[#1a1a1a] text-gray-300 rounded-b-xl">
            Yes, our plans are month-to-month with no long-term commitment. Cancel or pause anytime.
          </div>
        </div>

        <div className="border border-lime-400 rounded-xl overflow-hidden">
          <div className="px-4 py-3 flex justify-between items-center bg-[#111111] text-white rounded-t-xl">
            <span className="font-medium">Do you offer custom packages?</span>
            <span className="text-lime-400 text-xl">+</span>
          </div>
          <div className="px-4 py-3 bg-[#1a1a1a] text-gray-300 rounded-b-xl">
            Yes, we can tailor a package specific to your team’s needs. Book a call to discuss.
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="max-w-2xl mx-auto bg-black text-white p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Leave a Comment</h3>
        <form>
          <textarea
            className="w-full h-32 p-3 rounded-md bg-[#1a1a1a] text-white border border-gray-700 focus:outline-none"
            placeholder="Write your comment here..."
          ></textarea>
          <button
            type="button"
            className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default FAQs;
