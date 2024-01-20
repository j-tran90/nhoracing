import "../stylesheets/Navbar.css";
//import Link from "react-router-dom";
import "boxicons";

function NavBar() {
  return (
    <>
      <div className="container-fluid parent-div">
        <div className="container-fluid child-div gradient-down">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="/">
                <img
                  src="src\assets\nho_banner_white.png"
                  className="logo"
                ></img>
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
                  <a className="nav-link active" href="/">
                    Gallery
                  </a>
                  <a className="nav-link active" href="http://nhoracing.com/">
                    Shop
                  </a>
                  <a href="https://www.instagram.com/azn_renegade/?hl=en">
                    <box-icon
                      name="instagram"
                      type="logo"
                      color="#d81f28"
                      size="md"
                      animation="tada-hover"
                    ></box-icon>
                  </a>
                  <a href="https://www.tiktok.com/@azn_renegade">
                    <box-icon
                      name="tiktok"
                      type="logo"
                      color="#d81f28"
                      size="md"
                      animation="tada-hover"
                    ></box-icon>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
