// src/components/PricingPlans.jsx
import React from 'react';

const plans = [
  {
    title: 'Standard',
    price: '$2,995/m',
    note: 'Pause or cancel anytime',
    features: [
      '1x active task at a time',
      'Unlimited revisions',
      'Dedicated project manager',
      'Daily comms through Slack',
      'Work with senior designers',
      '2-3 days turn around time',
      'Top tier design'
    ],
    highlight: 'Most Popular'
  },
  {
    title: 'Growth',
    price: '$4,795/m',
    note: 'Pause or cancel anytime',
    features: [
      '2x active task at a time',
      'Unlimited revisions',
      'Dedicated project manager',
      'Daily comms through Slack',
      'Work with senior designers',
      '2-3 days turn around time',
      'Top tier design'
    ],
    highlight: 'Best Value'
  },
  {
    title: 'Basic - Weekly',
    price: '$890/m',
    note: 'Paid per weekly',
    features: [
      'Fixed Scope of work',
      '2 rounds of revisions',
      'Dedicated project manager',
      'Daily comms through Slack',
      '1x designer',
      '2-5 days turn around time',
      'Top tier design'
    ]
  }
];

const PricingPlans = () => {
  return (
   <section className="bg-black text-white py-16 px-4 md:px-12 lg:px-24 flex items-center justify-center min-h-screen">
  <div className="w-full">
    <div className="text-center mb-12">
      <p className="text-lime-400 text-sm tracking-widest uppercase">Clear & Simple Pricing</p>
      <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Simple pricing to level up your brand.</h2>
      <p className="text-gray-400">Senior experts. On-demand requests. Fast turnarounds. Flat monthly fee. Cancel anytime.</p>
    </div>

    <div className="flex flex-wrap justify-center gap-4">
      {plans.map((plan, index) => (
        <div
          key={index}
          className="bg-[#111111] min-h-[550px] w-full max-w-[320px] p-6 rounded-xl border border-gray-700 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{plan.title}</h3>
              {plan.highlight && (
                <span className="text-sm bg-lime-400 text-black px-3 py-1 rounded-full">
                  {plan.highlight}
                </span>
              )}
            </div>
            <p className="text-3xl font-bold text-lime-400">{plan.price}</p>
            <p className="text-gray-400 mb-6">{plan.note}</p>
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-lime-400 mr-2">★</span> {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-col items-center gap-2">
            <button className="w-40 bg-transparent border border-white text-white py-2 rounded hover:bg-white hover:text-black transition duration-300">
              Book A Call
            </button>
            <button className="w-40 bg-lime-400 text-black py-2 rounded hover:bg-lime-300 transition duration-300">
              Click to buy
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default PricingPlans;
