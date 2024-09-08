import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto w-3xl text-center">
          <h1 className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Secure & Share Your Documents
            <span className="sm:block">Anytime, Anywhere</span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
            Digitally store and share your important documents safely with
            family, linked to your Adhaar number.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to={"/login"}
              className="block w-full rounded border border-orange-600 bg-orange-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring active:text-orange-500 sm:w-auto"
              href="#"
            >
              Get Started
            </Link>

            <Link
              to={"/contact"}
              className="block w-full rounded border border-orange-600 px-12 py-3 text-sm font-medium text-orange-600 hover:bg-orange-600 hover:text-white focus:outline-none focus:ring active:bg-orange-500 sm:w-auto"
              href="#"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
