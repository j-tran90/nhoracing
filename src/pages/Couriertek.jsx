import ProgressBar from "react-bootstrap/ProgressBar";
import "../stylesheets/Projects.css";

export default function Couriertek() {
  const exStack = 80;
  const htmlStack = 80;
  const cssStack = 15;
  const jsStack = 5;
  return (
    <div className="container-fluid bg-light pb-5">
      <div className="container">
        <div className="display-1 pt-3 pt-md-5 pb-3 pb-md-5">CourierTek</div>
        <p className="display-6 pb-2">Overview</p>
        <p>
          <ul>
            Our task was to produce a lightweight webpage that will promote the
            brand and product for when the application is ready for launch. The
            design was determined by the client. The product descriptions were
            written by us. It was important to the client that the webpage is
            optimized for at least mobile usuage since CourierTek itself is a
            mobile-first platform.
            <div className="text-center p-3">
              <a
                type="button"
                className="btn btn-warning fw-bold"
                href="                https://glamorous-tan-slacks.cyclic.app/"
              >
                Visit CourierTek
              </a>
            </div>
          </ul>
        </p>
        <p className="display-6 pb-2 pt-2">Technology Stack</p>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={htmlStack} label={`${htmlStack}%`} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={cssStack} label={`${cssStack}%`} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={exStack} label={`${exStack}%`} />
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              className="devicons"
            />
          </div>
          <div className="col-9 col-md-10 progress-bar">
            <ProgressBar now={jsStack} label={`${jsStack}%`} />
          </div>
        </div>
      </div>
    </div>
  );
}