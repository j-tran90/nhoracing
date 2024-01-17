import "../stylesheets/Navbar.css";
//import Link from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="container-fluid parent-div">
        <div className="container-fluid child-div gradient1">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
              <a className="navbar-brand" href="/">
                <img
                  src="src\assets\Nho_Banner_Logo.png"
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
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle active"
                      href="#"
                      id="navbarDropdownMenuLink"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Gallery
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdownMenuLink"
                    >
                      <li>
                        <a
                          className="dropdown-item"
                          href="https://glamorous-tan-slacks.cyclic.app/"
                        >
                          holding1
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          holding2
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          holding3
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          holding4
                        </a>
                      </li>
                    </ul>
                  </li>
                  <a className="nav-link" href="http://nhoracing.com/">
                    Shop
                  </a>
                  <a className="nav-link" href="/">
                    About
                  </a>
                  <a className="nav-link" href="/">
                    Contact
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
