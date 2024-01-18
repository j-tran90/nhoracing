import "../stylesheets/Hero.css";

export default function Hero() {
  return (
    <>
      <div className="hero-image">
        <div className="container">
          <div className="hero-section">
            <h1 className="display-1">Nissan Skyline R32 - Godzilla</h1>
          </div>
          <div className="container-fluid gradient-up"></div>
        </div>
      </div>
      <div className="container p-3">
        <div className="container">
          <div className=" container p-0 row">
            <div className="col text-center  display-6 fw-bold">200 hp</div>
            <div className="col text-center  display-6 fw-bold">200 KM</div>
            <div className="col text-center  display-6 fw-bold">2.0 s</div>
          </div>
        </div>
      </div>
    </>
  );
}
