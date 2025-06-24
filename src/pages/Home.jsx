import Contact from "../components/Contact";
import FeaturedProjects from "../components/featuredProjects";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import Skills from "../components/Skills";

const Home = () => {
    return (
        <div>
           <Hero />
           <Skills />
          <FeaturedProjects />
          <Contact />
        </div>
    );
};

export default Home;