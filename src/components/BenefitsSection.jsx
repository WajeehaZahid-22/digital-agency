import React from "react";
import {
  Infinity,
  Zap,
  Globe,
  CheckCircle,
  DollarSign,
  BadgeDollarSign,
  Settings,
  Lightbulb,
  Users
} from "lucide-react";

const benefits = [
  {
    title: "1. On-demand requests",
    description: "Fill out your requests in the design queue in Trello, and we’ll knock them out 1 by 1.",
    icon: <Infinity className="text-lime-400 w-6 h-6" />,
  },
  {
    title: "2. Top-notch quality",
    description: "High-level work from a dedicated team of senior designers that’s always available when you need it.",
    icon: <Zap className="text-lime-400 w-6 h-6" />,
  },
  {
    title: "3. Powered by Webflow",
    description: "We build every site on Webflow, making them dynamic, accessible, and easily scalable. It's easy for you like Squarespace but better.",
    icon: <Globe className="text-lime-400 w-6 h-6" />,
  },
  {
    title: "4. Fast. Responsive. Reliable.",
    description: "Get regular updates on your projects and can expect to receive your designs within 2-3 days.",
    icon: <CheckCircle className="text-lime-400 w-6 h-6" />,
  },
  {
    title: "5. No Lock-in contracts",
    description: "Pay the same every month, no surprises. You can start for as long as you want and cancel anytime.",
    icon: <DollarSign className="text-lime-400 w-6 h-6" />,
  },
  {
    title: "6. Great value for money",
    description: "Get the power of dedicated design team at fraction of the cost of full-time employee. ($6.5k+/ vs. $15k/yr).",
    icon: <BadgeDollarSign className="text-lime-400 w-6 h-6" />,
  },
  {
    title: "7. Customized for you",
    description: "We design and build custom for you. We're never starting from a template unless you want that. You don't, right?",
    icon: <Settings className="text-lime-400 w-6 h-6" />,
  },
  {
    title: "8. Creative paying",
    description: "We’re here when you need us and not on payroll when you don’t.",
    icon: <Lightbulb className="text-lime-400 w-6 h-6" />,
  },
  {
    title: "9. Expert turnovers",
    description: "You’re getting 10+ years of design experience with every request. No hand-holding required.",
    icon: <Users className="text-lime-400 w-6 h-6" />,
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="md:flex md:justify-between items-start mb-12">
          <div className="md:w-1/2">
            <h4 className="text-lime-400 uppercase text-sm font-semibold mb-2">Benefits</h4>
            <h2 className="text-3xl sm:text-4xl font-bold">The design subscription that connects you to your dream team</h2>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0">
            <p className="text-gray-300 mb-4">
              A subscription can alleviate the stress of staffing, managing expenses, or make design calls like a Creative Director. We partner with you to ensure that your design elevates your brand to new levels.
            </p>
            <button className="bg-lime-400 text-black px-5 py-2 rounded-md font-semibold">See Pricing</button>
          </div>
        </div>

        {/* Cards Grid with no gap and no bg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="border border-neutral-800 hover:border-lime-400 p-6 transition-all duration-300"
            >
              <div className="mb-3">{benefit.icon}</div>
              <h3 className="font-semibold mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
