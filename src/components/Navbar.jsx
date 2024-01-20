import "../stylesheets/Navbar.css";
import Navlink from "./Navlink";
import Socials from "./Socials";

function NavBar() {
  return (
    <>
      <div className="container-fluid parent-div">
        <div className="container-fluid child-div gradient-down p-0">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="/">
              <img
                loading="lazy"
                src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/nho_banner_white.png?alt=media&token=92728c58-a438-49ad-99c2-598d4558bb5d"
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
            <div
              className="collapse navbar-collapse nav-dropdown-bg"
              id="navbarNavAltMarkup"
            >
              <div className="navbar-nav ms-auto">
                <Navlink />
                <Socials />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default NavBar;
