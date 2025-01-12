
// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const TAB_DATA = {
//   skill: {
//     content: {
//       AI: [
//         { name: "Deep Learning", percentage: 85 },
//         { name: "Machine Learning", percentage: 90 },
//         { name: "Transfer Learning", percentage: 80 },
//       ],
//       Hosting: [
//         { name: "FireBase", percentage: 88 },
//         { name: "StreamLit", percentage: 85 },
//         { name: "Vercel", percentage: 80 },
//       ],
//       Tools: [
//         { name: "PowerBI", percentage: 90 },
//         { name: "Tableau", percentage: 85 },
//         { name: "Figma", percentage: 80 },
//       ],
//     },
//   },
//   education: {
//     content: [
//       "🎓10th Standard (2019): Erode Hindu Kalvi Niliyalam Matriculation Hr. Sec. School - 73.8%",
//       "🎓12th Standard (2021): Erode Hindu Kalvi Niliyalam Matriculation Hr. Sec. School - 79.56%",
//       "🎓B.Tech (2021-2025): Artificial Intelligence and Data Science in KONGU ENGINEERING COLLEGE"
//     ],
//   },
//   certifications: {
//     content: ["Affective Computing",
//     "Emotional Intelligence",
//     "Product and Brand Management",
//     "Privacy & Security in Social Media"],
//   },
// };

// const AboutSection = () => {
//   const [activeTab, setActiveTab] = useState(null);
//   const [activeTech, setActiveTech] = useState(null);
//   const [mounted, setMounted] = useState(false);

//   // Ensure client-side rendering
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null; // Avoid rendering until the component has mounted
//   }

//   return (
//     <section className="text-white" id="about">
//       <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//         {/* Profile Image */}
//         <Image
//           // src="/images/school-girl-lofi-art-wallpaper-1400x1050_21.jpg"
//           src="/images/ANSA.png"
//           width={500}
//           height={500}
//           alt="Profile"
//         />

//         {/* About Content */}
//         <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
//           <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
//           <p className="text-base lg:text-lg">
//           I am a motivated Machine Learning Engineer with a solid foundation in AI and data science. Skilled in developing and deploying
//              models to address complex challenges and drive data-driven decisions. Proficient in feature extraction, model training, and
//              performance evaluation. Passionate about leveraging expertise to create intelligent systems and continuously improve          solutions.
//           </p>

//           {/* Tabs */}
//           <div className="flex flex-row space-x-8 mt-8">
//             {Object.entries(TAB_DATA).map(([tabId, { content }]) => (
//               <div key={tabId} className="relative">
//                 {/* Tab Button */}
//                 <button
//                   onClick={() => setActiveTab(activeTab === tabId ? null : tabId)}
//                   className={`bg-primary-500 text-white font-medium py-2 px-4 rounded-lg w-full ${
//                     activeTab === tabId ? "bg-primary-600" : ""
//                   }`}
//                 >
//                   {tabId.charAt(0).toUpperCase() + tabId.slice(1)}
//                 </button>

//                 {/* Dropdown Content */}
//                 {activeTab === tabId && (
//                   <div className="absolute bg-gray-800 text-white shadow-lg rounded-lg mt-2 p-6 w-96 max-h-96 overflow-y-auto z-10 ">
//                     {/* Render Technologies Tab */}
//                     {tabId === "skill" && (
//                       <div className="space-y-4">
//                         {Object.entries(content).map(([tech, subcategories]) => (
//                           <div key={tech}>
//                             {/* Technology Name */}
//                             <div
//                               className="font-medium cursor-pointer hover:text-primary-500"
//                               onClick={() =>
//                                 setActiveTech(activeTech === tech ? null : tech)
//                               }
//                             >
//                               {tech}
//                             </div>

//                             {/* Subcategories */}
//                             {activeTech === tech && (
//                               <ul className="pl-4 mt-2 space-y-4">
//                                 {subcategories.map((sub, index) => (
//                                   <li key={index} className="flex flex-col space-y-2">
//                                     {/* Subcategory Name */}
//                                     <div className="flex justify-between">
//                                       <span>{sub.name}</span>
//                                       <span>{sub.percentage}%</span>
//                                     </div>

//                                     {/* Progress Bar */}
//                                     <div className="w-full bg-gray-700 rounded-full h-2">
//                                       <div
//                                         className="bg-primary-500 h-2 rounded-full"
//                                         style={{ width: `${sub.percentage}%` }}
//                                       ></div>
//                                     </div>
//                                   </li>
//                                 ))}
//                               </ul>
//                             )}
//                           </div>
//                         ))}
//                       </div>
//                     )}

//                     {/* Other Tab Contents */}
//                     {tabId !== "skill" && (
//                       <ul className="space-y-2">
//                         {content.map((item, index) => (
//                           <li key={index} className="hover:text-primary-500">
//                             {item}
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
// export default AboutSection;

"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const TAB_DATA = {
  skill: {
    content: {
      AI: [
        { name: "Deep Learning", percentage: 85 },
        { name: "Machine Learning", percentage: 90 },
        { name: "Transfer Learning", percentage: 80 },
      ],
      Hosting: [
        { name: "FireBase", percentage: 88 },
        { name: "StreamLit", percentage: 85 },
        { name: "Vercel", percentage: 80 },
      ],
      Tools: [
        { name: "PowerBI", percentage: 90 },
        { name: "Tableau", percentage: 85 },
        { name: "Figma", percentage: 80 },
      ],
    },
  },
}
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeTech, setActiveTech] = useState(null);
  const [mounted, setMounted] = useState(false);

  // Ensure client-side rendering
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid rendering until the component has mounted
  }

  return (
    <section className="text-white scroll-mt-20" id="about">
      <div className="md:grid md:grid-cols-2 gap-10 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Profile Image */}
        <Image
          src="/images/ANSA.png"
          width={500}
          height={500}
          alt="Profile"
        />

        {/* About Content */}
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
              I am a motivated Machine Learning Engineer with a solid foundation in AI and data science. I am skilled in developing and deploying models to address complex challenges and drive data-driven decisions. Proficient in feature extraction, model training, performance evaluation, and designing scalable machine learning pipelines, I strive to optimize model performance for real-world applications.           </p>
          <p className="text-base lg:text-lg">
              With experience working on diverse datasets, conducting exploratory data analysis, and crafting actionable insights, I bring a data-centric approach to problem-solving. My technical expertise includes programming in Python and working with frameworks like TensorFlow and PyTorch. Passionate about staying updated with the latest advancements in AI, I aim to integrate cutting-edge techniques into projects to create intelligent systems, enhance user experiences, and deliver impactful solutions.
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap gap-4 mt-8">
            {Object.entries(TAB_DATA).map(([tabId, { content }]) => (
              <div key={tabId} className="relative">
                {/* Tab Button */}
                <button
                  onClick={() => setActiveTab(activeTab === tabId ? null : tabId)}
                  className={`bg-primary-500 text-white font-medium py-2 px-4 rounded-lg ${
                    activeTab === tabId ? "bg-primary-600" : ""
                  }`}
                >
                  {tabId.charAt(0).toUpperCase() + tabId.slice(1)}
                </button>

                {/* Dropdown Content */}
                {activeTab === tabId && (
                  <div className="absolute bg-gray-800 text-white shadow-lg rounded-lg mt-2 p-4 w-80 max-h-64 overflow-y-auto z-10">
                    {/* Render Technologies Tab */}
                    {tabId === "skill" && (
                      <div className="space-y-4">
                        {Object.entries(content).map(([tech, subcategories]) => (
                          <div key={tech}>
                            {/* Technology Name */}
                            <div
                              className="font-medium cursor-pointer hover:text-primary-500"
                              onClick={() =>
                                setActiveTech(activeTech === tech ? null : tech)
                              }
                            >
                              {tech}
                            </div>

                            {/* Subcategories */}
                            {activeTech === tech && (
                              <ul className="pl-4 mt-2 space-y-4">
                                {subcategories.map((sub, index) => (
                                  <li
                                    key={index}
                                    className="flex flex-col space-y-2"
                                  >
                                    {/* Subcategory Name */}
                                    <div className="flex justify-between">
                                      <span>{sub.name}</span>
                                      <span>{sub.percentage}%</span>
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                      <div
                                        className="bg-primary-500 h-2 rounded-full"
                                        style={{ width: `${sub.percentage}%` }}
                                      ></div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
