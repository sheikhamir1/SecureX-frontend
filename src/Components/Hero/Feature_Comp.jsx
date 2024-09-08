import React from "react";
import {
  FaSitemap,
  FaDraftingCompass,
  FaNewspaper,
  FaFileAlt,
} from "react-icons/fa";

const primaryColor = "#ff9800"; // Primary color

const FeatureSection = () => {
  return (
    <section
      className="relative pt-16 pb-16"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-5/12 px-4 mx-auto mb-8 lg:mb-0">
            <div className="relative flex flex-col min-w-0 break-words bg-white shadow-lg rounded-lg">
              <img
                alt="Secure Document Storage"
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                className="w-full align-middle rounded-t-lg"
              />
              <blockquote className="relative p-8 mb-4">
                <svg
                  preserveAspectRatio="none"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 583 95"
                  className="absolute left-0 w-full block h-16 -top-14"
                >
                  <polygon
                    points="-30,95 583,95 583,65"
                    className="fill-current text-white"
                  ></polygon>
                </svg>
                <h4
                  className="text-2xl font-bold"
                  style={{ color: primaryColor }}
                >
                  Secure & Share Your Documents
                </h4>
                <p
                  className="text-md font-light mt-2"
                  style={{ color: "#333" }}
                >
                  Safeguard and share important documents like mark sheets, PAN
                  cards, and passports. Reduce government costs and eliminate
                  physical documents by linking to your unique Adhaar number.
                </p>
              </blockquote>
            </div>
          </div>

          <div className="w-full lg:w-7/12 px-4">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-6/12 lg:w-6/12 px-4 mb-8">
                <div className="relative flex flex-col">
                  <div className="px-4 py-5 flex-auto bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gray-100">
                    <div
                      className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <FaSitemap />
                    </div>
                    <h6
                      className="text-xl font-semibold"
                      style={{ color: primaryColor }}
                    >
                      Secure Storage
                    </h6>
                    <p className="mt-2 mb-4" style={{ color: "#666" }}>
                      Store all your important documents safely in one place.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-8">
                  <div className="px-4 py-5 flex-auto bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gray-100">
                    <div
                      className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <FaDraftingCompass />
                    </div>
                    <h6
                      className="text-xl font-semibold"
                      style={{ color: primaryColor }}
                    >
                      Easy Access
                    </h6>
                    <p className="mt-2 mb-4" style={{ color: "#666" }}>
                      Quickly access and manage your documents online.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-6/12 px-4">
                <div className="relative flex flex-col">
                  <div className="px-4 py-5 flex-auto bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gray-100">
                    <div
                      className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <FaNewspaper />
                    </div>
                    <h6
                      className="text-xl font-semibold"
                      style={{ color: primaryColor }}
                    >
                      Share Effortlessly
                    </h6>
                    <p className="mt-2 mb-4" style={{ color: "#666" }}>
                      Share documents securely with family members or
                      authorities.
                    </p>
                  </div>
                </div>
                <div className="relative flex flex-col mt-8">
                  <div className="px-4 py-5 flex-auto bg-white shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:bg-gray-100">
                    <div
                      className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <FaFileAlt />
                    </div>
                    <h6
                      className="text-xl font-semibold"
                      style={{ color: primaryColor }}
                    >
                      All-in-One Platform
                    </h6>
                    <p className="mt-2 mb-4" style={{ color: "#666" }}>
                      Manage document uploads, updates, and deletions
                      seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
// import React from "react";
// import {
//   FaSitemap,
//   FaDraftingCompass,
//   FaNewspaper,
//   FaFileAlt,
// } from "react-icons/fa";

// const primaryColor = "#ff9800"; // Primary color
// const hoverColor = "#ffb74d"; // Slightly lighter shade for hover effects

// const FeatureSection = () => {
//   return (
//     <section className="relative pt-16 bg-gray-100 dark:bg-gray-800">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-wrap items-center">
//           <div className="w-full lg:w-5/12 px-4 mx-auto mb-8 lg:mb-0">
//             <div className="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-900 w-full shadow-lg rounded-lg overflow-hidden">
//               <img
//                 alt="Secure Document Storage"
//                 src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
//                 className="w-full h-64 object-cover rounded-t-lg transform transition-transform duration-500 hover:scale-105"
//               />
//               <blockquote className="relative p-8 mb-4">
//                 <svg
//                   preserveAspectRatio="none"
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 583 95"
//                   className="absolute left-0 w-full block h-16 -top-14"
//                 >
//                   <polygon
//                     points="-30,95 583,95 583,65"
//                     className="fill-current text-white dark:text-gray-800"
//                   ></polygon>
//                 </svg>
//                 <h4 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
//                   Secure & Share Your Documents
//                 </h4>
//                 <p className="text-lg font-light text-gray-600 dark:text-gray-300">
//                   Safeguard and share important documents like mark sheets, PAN
//                   cards, and passports. Reduce government costs and eliminate
//                   physical documents by linking to your unique Adhaar number.
//                 </p>
//               </blockquote>
//             </div>
//           </div>

//           <div className="w-full lg:w-7/12 px-4">
//             <div className="flex flex-wrap -mx-4">
//               <div className="w-full md:w-6/12 lg:w-6/12 px-4 mb-8">
//                 <div className="relative flex flex-col">
//                   <div className="px-4 py-6 flex-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-300">
//                     <div
//                       className="text-white p-4 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full"
//                       style={{ backgroundColor: primaryColor }}
//                     >
//                       <FaSitemap size={28} />
//                     </div>
//                     <h6
//                       className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2"
//                       style={{ color: primaryColor }}
//                     >
//                       Secure Storage
//                     </h6>
//                     <p className="text-md text-gray-600 dark:text-gray-300">
//                       Store all your important documents safely in one place.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="relative flex flex-col mt-8">
//                   <div className="px-4 py-6 flex-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-300">
//                     <div
//                       className="text-white p-4 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full"
//                       style={{ backgroundColor: primaryColor }}
//                     >
//                       <FaDraftingCompass size={28} />
//                     </div>
//                     <h6
//                       className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2"
//                       style={{ color: primaryColor }}
//                     >
//                       Easy Access
//                     </h6>
//                     <p className="text-md text-gray-600 dark:text-gray-300">
//                       Quickly access and manage your documents online.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full md:w-6/12 lg:w-6/12 px-4">
//                 <div className="relative flex flex-col">
//                   <div className="px-4 py-6 flex-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-300">
//                     <div
//                       className="text-white p-4 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full"
//                       style={{ backgroundColor: primaryColor }}
//                     >
//                       <FaNewspaper size={28} />
//                     </div>
//                     <h6
//                       className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2"
//                       style={{ color: primaryColor }}
//                     >
//                       Share Effortlessly
//                     </h6>
//                     <p className="text-md text-gray-600 dark:text-gray-300">
//                       Share documents securely with family members or
//                       authorities.
//                     </p>
//                   </div>
//                 </div>
//                 <div className="relative flex flex-col mt-8">
//                   <div className="px-4 py-6 flex-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-yellow-100 hover:to-yellow-300">
//                     <div
//                       className="text-white p-4 text-center inline-flex items-center justify-center w-16 h-16 mb-5 shadow-lg rounded-full"
//                       style={{ backgroundColor: primaryColor }}
//                     >
//                       <FaFileAlt size={28} />
//                     </div>
//                     <h6
//                       className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2"
//                       style={{ color: primaryColor }}
//                     >
//                       All-in-One Platform
//                     </h6>
//                     <p className="text-md text-gray-600 dark:text-gray-300">
//                       Manage document uploads, updates, and deletions
//                       seamlessly.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;
