import "../stylesheets/Footer.css";
import Navlink from "./Navlink";
import Socials from "./Socials";

function Footer() {
  return (
    <>
      <div className="container-fluid">
        <div className="container footer-nav">
          <div className="row">
            <div className="col-sm-3">
              <a className="navbar-brand" href="/">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/auth-development-ae591.appspot.com/o/nho_banner_white.png?alt=media&token=92728c58-a438-49ad-99c2-598d4558bb5d"
                  className="logo col-padding"
                ></img>
              </a>
            </div>
            <div className="col-sm-3">
              <h3>Explore</h3>
              <Navlink />
              <a href="#" className="nav-link">
                Privacy Policy
              </a>
            </div>

            <div className="col-sm-3">
              <Socials />
            </div>
          </div>
        </div>

        <div className="container-fluid footer">
          &copy; 2022 Nho Racing. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
