import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-20 bg-white">
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        <p className="text-sm tracking-widest text-gray-500 uppercase mb-2">
          Our Heartfelt Mission
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800">
          <span className="text-lime-500">Nurturing Lives</span>, Creating
          <br />
          Bonds With Furry Pet
        </h1>
        <p className="text-gray-600 mt-6 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <button className="mt-8 px-6 py-3 bg-lime-300 hover:bg-lime-400 text-gray-800 font-semibold rounded-full transition">
          About Us
        </button>
      </div>

      {/* Right Image */}
      <div className="relative mt-12 md:mt-0">
        <div className="bg-lime-100 rounded-[2rem] w-[300px] h-[420px] md:w-[350px] md:h-[480px] absolute top-0 right-0 -z-10"></div>
        <img
          src="/images/hero-girl.webp"
          alt="Woman with dog"
          className="w-[300px] md:w-[350px] rounded-[2rem] object-cover"
        />
        <div className="absolute -bottom-4 left-4 bg-lime-200 p-4 rounded-xl">
          <img
            src="/images/paw.png"
            alt="Paw Icon"
            className="w-6 h-6 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
