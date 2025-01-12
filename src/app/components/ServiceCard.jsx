// import React from "react";

// const ServiceCard = ({ title, description, icon,imgae, hoverColor }) => {
//   return (
//     <div className="group relative h-52 md:h-72 rounded-xl bg-gray-800">
//       <div
//         className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white transition-all duration-500 rounded-xl group-hover:bg-${hoverColor}`}
//       >
//         <div className="h-14 w-14 mb-4">{icon}</div>
//         <h5 className="text-2xl font-semibold">{title}</h5>
//       </div>
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl px-6">
//         <p className="text-center text-[#ADB7BE]">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;

import React from "react";
import Image from "next/image";

const ServiceCard = ({ title, description,skills,icon, image, hoverColor }) => {
  return (
    <div className="group relative h-52 md:h-72 rounded-xl bg-gray-800 overflow-hidden">
      {/* Background Image */}
      {image && (
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src={image}
            alt={title}
            layout="fill" // Makes the image fill the container
            objectFit="cover" // Ensures the image covers the entire container
            className="rounded-xl"
          />
        </div>
      )}

      {/* Overlay Content */}
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white transition-all duration-500 rounded-xl group-hover:bg-${hoverColor} bg-opacity-70`}
      >
        {/* Icon */}
        <div className="h-14 w-14 mb-4">{icon}</div>

        {/* Title */}
        <h5 className="text-2xl font-semibold">{title}</h5>
      </div>

      {/* Hover Description */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl px-6">
        <p className="text-center text-[#ADB7BE] mb-2">{description}</p>
        <div><p className="text-center text-gray-400">{skills}</p></div>
      </div>
    </div>
  );
};

export default ServiceCard;
