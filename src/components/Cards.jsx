import "../stylesheets/Cards.css";

function Cards() {
  return (
    <>
      <div className="grid container-fluid">
        <div className="container display-1 text-center"></div>
        <div className="row row-cols-xl-4">
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <img
                src="src\assets\Brian's R32-3.jpg"
                alt="img09"
                className=""
              />
              <figcaption>
                <h2>
                  Nissan <span>The Origin</span>
                </h2>
                <p>
                  I bought the car October 2013 and received it August 2014. I
                  went through an importer called Right Drive out of Toronto.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <img
                src="src\assets\Brian Nho's R32-9.jpg"
                alt="img09"
                className=""
              />
              <figcaption>
                <h2>
                  Skyline <span>The Project</span>
                </h2>
                <p>
                  My first mods were coilovers,rims and a carbon flap. Due to me
                  waiting 9.5 months and receiving a different car I was able to
                  get a brand new set of coilovers for next to nothing. The rims
                  I always wanted even before I had the thought of buying a
                  Skyline. The carbon flap, at the time, wasn't a common thing
                  but I loved they way it made the car look.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <img src="src\assets\Brian Nho's R32-25.jpg" alt="img09" />
              <figcaption>
                <h2>
                  R32 <span>The Journey</span>
                </h2>
                <p>
                  I always wanted this car after playing Gran Turismo on the
                  PS2. What I have always wanted was to drive it on the track. I
                  have done multiple track days, autocross, a bajillion car
                  shows and meets. I have taken it to North Carolina to the Tail
                  of the Dragon, Wasaga Beach and all over Michigan.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="col col-md-6">
            <figure className="effect-oscar">
              <img src="src\assets\Brian's R32-21.jpg" alt="img09" />
              <figcaption>
                <h2>
                  Godzilla <span>The Inspiration</span>
                </h2>
                <p>
                  The livery it currently has on was due to the big car show
                  called Autorama. Auto Autorama is America's biggest classic
                  car show. I went the one year with all white car and gold
                  wheels. The second year a friend of mine was going to wrap his
                  car so I decided to do the same. The livery is a replica of
                  the 1991 Bathurst winning racecar. At this race is where the
                  name "Godzilla" was synonymous with the Skyline. So what
                  better way to bring a classic legend to a classic car show.
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
