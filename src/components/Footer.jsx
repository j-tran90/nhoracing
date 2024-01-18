import "../stylesheets/Footer.css";

function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark">
        <div className="container footer-nav bg-dark">
          <div className="row">
            <div className="col-sm-2">
              <a className="navbar-brand" href="/">
                <img
                  src="src\assets\nho_banner_white.png"
                  className="logo"
                ></img>
              </a>
            </div>
            <div className="col-sm-2">
              <h3 className="text-white">Explore</h3>
              <a href="#" className="nav-link">
                Gallery
              </a>
              <a href="#" className="nav-link">
                Shop
              </a>
              <a href="#" className="nav-link">
                About
              </a>
              <a href="#" className="nav-link">
                Privacy Policy
              </a>
            </div>
            <div className="col-sm-4">
              <h3 className="text-white">Contact</h3>
              We have multiple ways for you to reach us and we want to start
              working with you.
            </div>
            <div className="col-sm-4">
              <a href="#">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                  className="socials-footer"
                />
              </a>
              <a href="#">
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg"
                  className="socials-footer"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="container-fluid footer bg-dark">
          &copy; 2022 Nho Racing. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default Footer;
