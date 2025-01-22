// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import AboutSection from "./components/AboutScetion";
// import ProjectsSection from "./components/ProjectsSection";
// import EmailSection from "./components/EmailSection";
// import Footer from "./components/Footer";
// import AchievementsSection from "./components/AchievementsSection";
// import ServicesSection from "./components/ServicesSection";
// import Education from "./components/Education";
// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col bg-gradient-to-b from-[#121212] via-gray-900 to-gray-800">
//       <Navbar />
//       <div className="container mt-24 mx-auto px-12 py-4">
//         <HeroSection />
//         <AchievementsSection />
//         <AboutSection />
//         <Education/>
//         <ProjectsSection />
//         <ServicesSection/>
//         <EmailSection />
//       </div>
//       <Footer />
//     </main>
//   );
// }


"use client";
import React, { useEffect} from "react";
import WAVES from'vanta/src/vanta.net'
import * as THREE from 'three';
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutScetion";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Education from "./components/Education";
import AchievementsSection from "./components/AchievementsSection";
import ServicesSection from "./components/ServicesSection";
export default function Home() {
  useEffect(() => {
      WAVES({
        el:'#vanta',
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x3fff8b,
        THREE:THREE,
      });
      
      return () => {
        vantaEffect.destroy();  // Cleanup when the component is unmounted
      };
    }, []);
  
  return (
    <div className="app">
      <div id="vanta">
      {/* Foreground content */}
      <main className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <HeroSection />
          <AchievementsSection />
          <AboutSection />
          <Education/>
          <ProjectsSection />
          <ServicesSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
      </div>
    </div>
  );
}
