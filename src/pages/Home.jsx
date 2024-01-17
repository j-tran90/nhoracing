import Hero from "../components/Hero";
import ProjectCards from "../components/Projectcards";
import Skills from "./Skills";
import About from "./About";

function Home() {
  return (
    <>
      <Hero />
      <div id="projects">
        <ProjectCards />
      </div>
      <div id="skills"></div>
      <div id="about"></div>
    </>
  );
}

export default Home;
