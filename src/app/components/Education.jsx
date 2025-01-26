// import React, { useRef } from 'react';
// import { motion, useScroll } from "framer-motion";

// const Details = ({ type, time, place, info }) => {
//     const ref = useRef(null);

//     return (
//         <motion.li
//             ref={ref}
//             className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col relative pl-8" // Added padding left for space for circle
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{
//                 duration: 0.5,
//                 type: "spring",
//                 bounce: 0.25,
//             }}
//         >
//             {/* Circle Point */}
//             <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full" />

//             <motion.div
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, type: "spring" }}
//             >
//                 <h3 className="capitalize font-bold text-2xl text-white">
//                     {type}
//                 </h3>
//                 <span className="capitalize font-medium text-white block">
//                     {time} | {place}
//                 </span>
//                 <p className="font-medium w-full mt-2 text-white text-justify">
//                     {info}
//                 </p>
//             </motion.div>
//         </motion.li>
//     );
// };

// const Education = () => {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "center start"]
//     });

//     return (
//         <div className="my-16">
//             <div ref={ref} className="w-[75%] mx-auto relative flex justify-between lg:w-[90%] md:w-full">
//                 {/* Education Section */}
//                 <div className="w-[45%]">
//                     <motion.div
//                         style={{ scaleY: scrollYProgress }}
//                         className="absolute left-9 top-8 w-[4px] h-full bg-primary origin-top"
//                     />
//                     <ul className="w-full flex flex-col items-start justify-between ml-4">
//                         <Details
//                             type="Bachelor Of Technology in Artificial Intelligence and Data Science"
//                             time="2021 – Expected March 2025"
//                             place="Kongu Engineering College"
//                             info="Cumulative GPA: 7.58/10. Relevant courses include Machine Learning, Deep Learning, and Ethical AI."
//                         />
//                         <Details
//                             type="High School (HSC)"
//                             time="2020 – 2021"
//                             place="Erode Hindu Kalvi Niliyalam Matriculation Hr.Sec.School"
//                             info="Scored 79.56%. Key subjects: Physics,Computer Science, Chemistry, and Mathematics."
//                         />
//                         <Details
//                             type="Secondary School (SSLC)"
//                             time="2018 – 2019"
//                             place="Erode Hindu Kalvi Niliyalam Matriculation Hr.Sec.School"
//                             info="Scored 73.8%. Focus on Mathematics and Science."
//                         />
//                     </ul>
//                 </div>

//                 {/* Courses Section */}
//                 <div className="w-[45%]">
//                     <ul className="w-full flex flex-col items-start justify-between ml-4">
//                         <Details
//                             type="Design & Implementation of Human-Computer Interfaces"
//                             time="Course Duration: 3 Months"
//                             place="NPTEL"
//                             info="Focused on creating user-friendly and intuitive interfaces for effective interaction."                        />
//                         <Details
//                             type="Affective Computing"
//                             time="Course Duration: 3 Months"
//                             place="NPTEL"
//                             info="Explored techniques for machines to recognize and respond to human emotions."
//                             />
//                         <Details
//                             type="Emotional Intelligence"
//                             time="Course Duration: 3 Months"
//                             place="NPTEL"
//                             info="Studied emotional understanding to improve interaction dynamics in technology."/>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Education;

// import { useRef } from 'react';
// import { motion, useScroll } from "framer-motion";

// const Details = ({ type, time, place, info }) => {
//     const ref = useRef(null);

//     return (
//         <motion.li
//             ref={ref}
//             className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col relative pl-8" // Added padding left for space for circle
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{
//                 duration: 0.5,
//                 type: "spring",
//                 bounce: 0.25,
//             }}
//         >
//             {/* Animated Circle Point */}
//             <motion.div
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full"
//                 initial={{ y: 0 }}
//                 animate={{ y: [-10, 10, -10, 10, 0] }}  // Bounce animation
//                 transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//             />

//             <motion.div
//                 initial={{ y: 50, opacity: 0 }}
//                 whileInView={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.5, type: "spring" }}
//             >
//                 <h3 className="capitalize font-bold text-2xl text-white">
//                     {type}
//                 </h3>
//                 <span className="capitalize font-medium text-white block">
//                     {time} | {place}
//                 </span>
//                 <p className="font-medium w-full mt-2 text-white text-justify">
//                     {info}
//                 </p>
//             </motion.div>
//         </motion.li>
//     );
// };

// const Education = () => {
//     const ref = useRef(null);
//     const { scrollYProgress } = useScroll({
//         target: ref,
//         offset: ["start end", "center start"]
//     });

//     return (
//         <div className="my-16 scroll-mt-20">
//             <div ref={ref} className="w-[75%] mx-auto relative flex justify-between lg:w-[90%] md:w-full">
//                 {/* Education Section */}
//                 <div className="w-[45%]">
//                     <motion.div
//                         style={{ scaleY: scrollYProgress }}
//                         className="absolute left-9 top-8 w-[4px] h-full bg-primary origin-top"
//                     />
//                     <ul className="w-full flex flex-col items-start justify-between ml-4">
//                         <Details
//                             type="Bachelor Of Technology in Artificial Intelligence and Machine Learning"
//                             time="2021 – Expected March 2025"
//                             place="Kongu Engineering College"
//                             info="Cumulative GPA: 7.58/10. Relevant courses include Machine Learning, Deep Learning, and Ethical AI."
//                         />
//                         <Details
//                             type="High School (HSC)"
//                             time="2020 – 2021"
//                             place="CEOA Matriculation Higher Secondary School"
//                             info="Scored 84.064%. Key subjects: Physics, Chemistry, and Mathematics."
//                         />
//                         <Details
//                             type="Secondary School (CBSE)"
//                             time="2018 – 2019"
//                             place="GEMS Our Own English High School (Boys Branch)"
//                             info="Scored 73.33%. Focus on Mathematics and Science."
//                         />
//                     </ul>
//                 </div>

//                 {/* Courses Section */}
//                 <div className="w-[45%]">
//                     <ul className="w-full flex flex-col items-start justify-between ml-4">
//                         <Details
//                             type="Design & Implementation of Human-Computer Interfaces"
//                             time="Course Duration: 3 Months"
//                             place="NPTEL"
//                             info="Focused on creating user-friendly and intuitive interfaces for effective interaction."
//                         />
//                         <Details
//                             type="Affective Computing"
//                             time="Course Duration: 3 Months"
//                             place="NPTEL"
//                             info="Explored techniques for machines to recognize and respond to human emotions."
//                         />
//                         <Details
//                             type="Emotional Intelligence"
//                             time="Course Duration: 3 Months"
//                             place="NPTEL"
//                             info="Studied emotional understanding to improve interaction dynamics in technology."
//                         />
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Education;

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

    return (
        <motion.li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[90%] md:w-[60%] mx-auto flex flex-col relative pl-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                type: "spring",
                bounce: 0.25,
            }}
        >
            <motion.div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-primary rounded-full"
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-lg md:text-2xl text-white">{type}</h3>
                <span className="capitalize font-medium text-white block text-sm md:text-base">
                    {time} | {place}
                </span>
                <p className="font-medium w-full mt-2 text-white text-justify text-sm md:text-base">
                    {info}
                </p>
            </motion.div>
        </motion.li>
    );
};

const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="my-16 scroll-mt-20">
            {/* Section Header */}
            <h2 className="text-2xl md:text-4xl font-bold text-center text-white mb-8">
                Education & Courses
            </h2>

            <div
                ref={ref}
                className="w-[90%] mx-auto relative flex flex-col lg:flex-row justify-between lg:w-[85%] md:w-full"
            >
                {/* Education Section */}
                <div className="w-full lg:w-[45%] mb-12 lg:mb-0">
                    <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center lg:text-left">
                        Education
                    </h3>
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="absolute left-6 md:left-9 top-8 w-[2px] md:w-[4px] h-full bg-primary origin-top hidden lg:block"
                    />
                    <ul className="w-full flex flex-col items-start justify-between">
                        <Details
                            type="Bachelor Of Technology in Artificial Intelligence and Machine Learning"
                            time="2021 – Expected March 2025"
                            place="Kongu Engineering College"
                            info="Cumulative GPA: 7.58/10. Relevant courses include Machine Learning, Deep Learning, and Ethical AI."
                        />
                        <Details
                            type="High School (HSC)"
                            time="2020 – 2021"
                            place="CEOA Matriculation Higher Secondary School"
                            info="Scored 84.064%. Key subjects: Physics, Chemistry, and Mathematics."
                        />
                        <Details
                            type="Secondary School (CBSE)"
                            time="2018 – 2019"
                            place="GEMS Our Own English High School (Boys Branch)"
                            info="Scored 73.33%. Focus on Mathematics and Science."
                        />
                    </ul>
                </div>

                {/* Courses Section */}
                <div className="w-full lg:w-[45%]">
                    <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center lg:text-left">
                        Courses
                    </h3>
                    <ul className="w-full flex flex-col items-start justify-between">
                        <Details
                            type="Design & Implementation of Human-Computer Interfaces"
                            time="Course Duration: 3 Months"
                            place="NPTEL"
                            info="Focused on creating user-friendly and intuitive interfaces for effective interaction."
                        />
                        <Details
                            type="Affective Computing"
                            time="Course Duration: 3 Months"
                            place="NPTEL"
                            info="Explored techniques for machines to recognize and respond to human emotions."
                        />
                        <Details
                            type="Emotional Intelligence"
                            time="Course Duration: 3 Months"
                            place="NPTEL"
                            info="Studied emotional understanding to improve interaction dynamics in technology."
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;
