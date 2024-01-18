import "../stylesheets/About.css";
import Journal from "../components/Journal";

function About() {
  return (
    <>
      <div className="container">
        <h1 className="display-1 text-center p-5">About Me</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="pb-5 pt-5">
          <Journal id="origin" />
          <div className="circular--portrait center--portrait">
            <img src="img" />
          </div>
        </div>
        <div className="container text-center pb-5"></div>
      </div>
    </>
  );
}

export default About;
