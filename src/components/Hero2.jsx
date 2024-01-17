import "../stylesheets/Hero.css";

function Carousel() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item crop active">
            <img
              src="src\assets\IMG_2416-Edit.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h1 className="display-1 fw-bolder">NHORACING</h1>
              <p className="lead">R32</p>
            </div>
          </div>
          <div className="carousel-item crop">
            <img
              src="src\assets\wm_Brian's R32 Roller Shot insta post.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item crop">
            <img
              src="src\assets\FB_IMG_1585501177433.jpg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption  d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <br />
    </>
  );
}

export default Carousel;
