import "../stylesheets/Navbar.css";
//import Link from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container navbar-custom">
          <a className="navbar-brand" href="/home">
            <img src="./src/assets/logo5.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#">
                Projects
              </a>
              <a className="nav-link" href="/skills">
                Skills
              </a>
              <a className="nav-link" href="/about">
                About
              </a>
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <br />
    </>
  );
}

export default NavBar;
