import Hero from "../components/Hero";
import Cards from "../components/Cards";

function Home() {
  return (
    <>
      <Hero />
      <div id="projects">
        <Cards />
      </div>
    </>
  );
}

export default Home;
