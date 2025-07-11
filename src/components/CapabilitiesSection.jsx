import React from "react";

const capabilities = [
  "Web design & UI", "Social media visuals", "Infographics", "Design system",
  "Email design", "Stationery", "Icons", "Packaging & merch", "Signage",
  "Brochures", "Logos & branding", "Digital ads", "Wireframes"
];

const CapabilitiesSection = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h4 className="text-sm text-lime-400 font-semibold uppercase">Our Capabilities</h4>
        <h2 className="text-3xl sm:text-4xl font-bold my-4">We can help you with…</h2>

        <div className="flex flex-wrap justify-center gap-3 my-8">
          {capabilities.map((item, idx) => (
            <span key={idx} className="bg-lime-400 text-black px-4 py-2 rounded-full text-sm font-medium">
              {item}
            </span>
          ))}
        </div>

        <div className="mt-4 text-lime-400 text-sm flex justify-center items-center space-x-2">
          <span className="animate-spin">⏳</span>
          <p>Load More</p>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
