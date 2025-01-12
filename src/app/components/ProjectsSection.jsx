"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Buddy_gallery",
    description: " Developed an online gallery app using React and Firebase, enabling users to store images with login and sign-up functionality for secure access and management",
    image: "/images/projects/1.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prethish004/Buddy-s_Gallery_App.git",
    previewUrl: "https://buddy-s-gallery-app.vercel.app",
  },
  {
    id: 2,
    title: "Detecting Signs of Depression",
    description: "Detecting Signs of Depression involves the application of data-driven methods and machine learning algorithms to identify and assess potential indicators of depression in individuals, aiding in early detection and intervention.",
    image: "/images/projects/2.webp",
    tag: ["All", "Model"],
    gitUrl: "https://github.com/prethish004/detecting_signs_of_depression.git",
    // previewUrl: "/",
  },
  {
    id: 3,
    title: "Movie Recommendation Application",
    description: " Developed a movie recommendation system using React, Firebase, and TMDB API for searching, categorizing, and viewing movie details, ratings, and trailers.",
    image: "/images/projects/3.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prethish004/Movie_Recom.git",
    previewUrl: "https://movie-recommendation-xi.vercel.app",
  },
  {
    id: 4,
    title: "Emotion-Based Music Recommendation System",
    description: "Developed a Streamlit-based tool to convert images from multiple ZIP files into a single PDF with options for image resizing, reordering, and maintaining original dimensions. Hosted online for seamless user access.",
    image: "/images/projects/4.jpg",
    tag: ["All", "Model","Web"],
    gitUrl: "https://github.com/prethish004/Emotion_Based_Music_Player_with_Age_Preference.git",
    previewUrl: "https://emotionbasedmusicplayerfromyoutube.streamlit.app",
  },
  {
    id: 5,
    title: "Event Categorization from News Articles",
    description: "Implemented NLP techniques using Count Vectorizer and TF-IDF for feature extraction from news articles. Trained and compared multiple models, achieving 98% accuracy with the Random Forest model.",
    image: "/images/projects/5.webp",
    tag: ["All", "Model"],
    gitUrl: "https://github.com/prethish004/EVENT_DETECTION_USING_ML_MODELS.git",
    // previewUrl: "/",
  },
  {
    id: 6,
    title: "ZIP to PDF Converter",
    description: "Developed a Streamlit-based tool to convert images from multiple ZIP files into a single PDF with options for image resizing, reordering, and maintaining original dimensions. Hosted online for seamless user access.",
    image: "/images/projects/6.webp",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/prethish004/Convert_zip-to-pdf.git",
    previewUrl: "https://ziptopdfconvertor.streamlit.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects"  className="scroll-mt-20">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-4 md:mb-6">My Projects</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Model"
          isSelected={tag === "Model"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;