import AboutPreview from "../components/AboutPreview";
import Contact from "../components/Contact";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import { useEffect } from "react";
import { useLocation } from "react-router";


const Home = () => {

 
// Home.jsx ba App.jsx-er vitor eita add korun
const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.getElementById(location.hash.substring(1));
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100); // Choto ekti delay thakle render-er por scroll thikmoto hoy
    }
  }
}, [location]);
    return (
        <div> 
           <Hero />
           <AboutPreview />
           <Skills />
          <FeaturedProjects />
          <Contact />
        </div>
    );
};

export default Home;