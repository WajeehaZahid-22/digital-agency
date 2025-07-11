import React from "react";
import { Play, LayoutDashboard, RefreshCcw, ArrowRight } from "lucide-react";

const HowWeWork = () => {
  return (
    <section id="process" className="bg-black text-white px-6 md:px-20 py-20">
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-4">
        <div className="h-px w-20 bg-lime-400"></div>
        <p className="text-lime-400 text-sm font-semibold uppercase tracking-widest">
          How We Work
        </p>
      </div>

      {/* Heading and Paragraph */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <h2 className="text-3xl md:text-5xl font-bold max-w-xl">
          Get a dedicated design team at fraction of the cost.
        </h2>
        <div className="max-w-md text-neutral-400">
          <p className="font-medium">
            Grow your brand with high-quality design for a flat monthly fee. Work with senior designers.
            Subscribe and make as many requests as you need – no limits.
          </p>
          <a
            href="#get-started"
            className="mt-6 inline-block bg-lime-400 text-black font-semibold px-6 py-3 rounded"
          >
            See Pricing
          </a>
        </div>
      </div>

      {/* Steps with Arrows */}
      <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-lime-400 rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <Play className="text-black w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-white mt-2">Subscribe & Get Started</h3>
          <p className="text-neutral-300 font-medium text-[15px] mt-2">
            Submit as many design tasks as you need without worrying about individual project fees.
          </p>
        </div>

        {/* Arrow to Step 2 */}
        <div className="hidden md:block">
          <ArrowRight className="w-20 h-6 text-lime-400" />
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-lime-400 rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <LayoutDashboard className="text-black w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-white mt-2">Polished Designs – On Time</h3>
          <p className="text-neutral-300 font-medium text-[15px] mt-2">
            Our designers get to work to deliver your request. Receive your design within a few days.
          </p>
        </div>

        {/* Arrow to Step 3 */}
        <div className="hidden md:block">
          <ArrowRight className="w-20 h-6 text-lime-400" />
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="bg-lime-400 rounded-full w-16 h-16 flex items-center justify-center mb-2">
            <RefreshCcw className="text-black w-6 h-6" />
          </div>
          <h3 className="font-bold text-lg text-white mt-2">Revisions Made Simple</h3>
          <p className="text-neutral-300 font-medium text-[15px] mt-2">
            Custom designs, prompt replies and as many revisions as you need.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
