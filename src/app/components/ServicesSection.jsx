import React from "react";
import { CodeBracketIcon, PaintBrushIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import ServiceCard from "./ServiceCard";
const services = [
  {
    id: 1,
    title: "AI Developer",
    description: "Specializes in building AI models and integrating intelligent systems.",
    skills: "TensorFlow, PyTorch, NLP, Computer Vision",
    icon: <CodeBracketIcon className="h-10 w-10 text-white" />,
    image: "/images/ai_developer.jpg", // Relative path to the image
    hoverColor: "bg-gradient-to-r from-purple-500 to-purple-800",
},
  {
    id: 2,
    title: "UI/UX Designer",
    description: "Designs intuitive and engaging user interfaces with a focus on usability.",
    skills: "Figma, Adobe XD, Prototyping, Design Systems",
    icon: <PaintBrushIcon className="h-10 w-10 text-white" />,
    image: "/images/ui.jpg", // Relative path to the image
    hoverColor: "g-gradient-to-r from-pink-500 to-pink-800",
  },
  {
    id: 3,
    title: "Data Analyst",
    description: "Analyzes complex data sets to uncover actionable insights and trends.",
    skills: "Python, SQL, Tableau, Power BI",
    icon: <ChartBarIcon className="h-10 w-10 text-white" />,
    image: "/images/data.webp", // Relative path to the image
    hoverColor: "bg-gradient-to-r from-green-500 to-green-800",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            skills={service.skills}
            image={service.image}
            icon={service.icon}
            hoverColor={service.hoverColor}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
