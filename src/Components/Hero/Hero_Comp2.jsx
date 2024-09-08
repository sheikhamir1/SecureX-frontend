import React from "react";

const Hero_Comp2 = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-screen-xl px-4 md:px-8 mx-auto lg:h-screen">
          <div className="pt-16 lg:pt-32 lg:max-w-lg lg:pr-5">
            <div className="max-w-xl mb-8 lg:mb-12">
              <div>
                <p className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-gray-900 uppercase rounded-full bg-yellow-300">
                  Secure & Reliable
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none">
                Digitally Store & Share
                <br className="hidden md:block" />
                Your Important
                <span className="inline-block text-white">Documents</span>
              </h2>
              <p className="text-base md:text-lg mb-6">
                Safeguard essential documents like mark sheets, PAN cards, and
                passports in digital format, linked with your Adhaar number.
                Share securely with family members, ensuring peace of mind.
              </p>
              {/* <div className="flex items-center ">
                <a
                  href="/"
                  className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none "
                >
                  Get Started
                </a>
                <a
                  href="/"
                  className="inline-flex items-center font-semibold transition-colors duration-200 text-white hover:text-orange-300 px-3 py-2"
                >
                  Learn More
                </a>
              </div> */}
            </div>
          </div>
          <div className="relative w-full max-w-xs lg:max-w-sm lg:w-1/2 lg:pl-8 mb-10 mt-10 ">
            <img
              src="/img.jpg"
              className="object-contain w-full h-auto mx-auto lg:h-full"
              alt="Phone"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_Comp2;
