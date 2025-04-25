import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      {/* Left Content */}
      <div className="text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
          <span className="text-lime-500">Unleashing</span> Joy, One <br />
          Paw at a Time
        </h1>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="mt-6 flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
          <button className="bg-lime-300 hover:bg-lime-400 text-gray-900 font-semibold px-6 py-3 rounded-full transition">
            Adopt a Pet
          </button>
          <button className="border-2 border-lime-500 text-lime-600 font-semibold px-6 py-3 rounded-full hover:bg-lime-50 transition">
            Donate
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="relative mt-10 md:mt-0">
        <img
          src="/images/hero-main.webp"
          alt="Hero"
          className="w-[340px] md:w-[420px] rounded-full mx-auto"
        />
        {/* Floating circles */}
        <img
          src="/images/pet1.webp"
          alt="Pet 1"
          className="absolute top-0 left-2 w-16 h-16 border-4 border-lime-200 rounded-full"
        />
        <img
          src="/images/pet2.webp"
          alt="Pet 2"
          className="absolute bottom-4 left-0 w-16 h-16 border-4 border-lime-200 rounded-full"
        />
        <img
          src="/images/pet3.webp"
          alt="Pet 3"
          className="absolute top-4 right-6 w-16 h-16 border-4 border-lime-200 rounded-full"
        />
        <img
          src="/images/pet4.webp"
          alt="Pet 4"
          className="absolute bottom-2 right-8 w-16 h-16 border-4 border-lime-200 rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
