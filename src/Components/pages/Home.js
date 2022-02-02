import React from "react";
import { Link } from "react-router-dom";
import useWindowDimensions from "../windowDemension";

function Home() {

  let documentWidth = useWindowDimensions().width

  if (documentWidth  < 375 ) {
    document.body.style.backgroundImage =
    "url('./assets/home/background-home-mobile.jpg')";
   
  } else  if (documentWidth  < 775 ) {
    document.body.style.backgroundImage =
    "url('./assets/home/background-home-tablet.jpg')";
  } else {
    document.body.style.backgroundImage =
    "url('./assets/home/background-home-desktop.jpg')";
  }

  return (
    <div classNamne="container">
      <div className="row align-self-end">
        <div className="col-lg-6 MainPageText">
          <div className="">
            <h3 className="pb-5 altColor"> So, you want to travel to </h3>
            <h1 className="pb-2"> SPACE </h1>
            <h5 className="altColor">
              {" "}
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience! Explore
            </h5>
          </div>
        </div>
        <div className="exploreContainer">
          <div className="exploreHover">
            <Link to="/Destination" className="exploreButton">
              <h5 className="subHeading exploreButtonText noHover">EXPLORE</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
