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
                  className="logo col-padding"
                ></img>
              </a>
            </div>
            <div className="col-sm-2 col-padding">
              <h3 className="text-white">Explore</h3>
              <a href="#" className="nav-link">
                Gallery
              </a>
              <a href="#" className="nav-link">
                Shop
              </a>
              <a href="#" className="nav-link">
                Privacy Policy
              </a>
            </div>

            <div className="col-sm-4">
              <a href="https://www.instagram.com/azn_renegade/?hl=en">
                <box-icon
                  name="instagram"
                  type="logo"
                  color="#d81f28"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
              </a>
              <a href="https://www.tiktok.com/@azn_renegade">
                <box-icon
                  name="tiktok"
                  type="logo"
                  color="#d81f28"
                  size="lg"
                  animation="tada-hover"
                ></box-icon>
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
