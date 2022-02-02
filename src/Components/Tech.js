import React from "react";
import useWindowDimensions from "./windowDemension";
import Technology from "./pages/Technology";
import TechTabs from "./TechTabs";

function Tech(props) {
  let hidden =""
  let imgPosition = props.imgPort;
  if (useWindowDimensions().width < 1080) {
    imgPosition = props.imgLand;
    hidden = "true"
  }





  return (
    <div className="row">
      <div className={hidden ? "TechImgContainer" : "hidden"}>
        <img className="" src={imgPosition}></img>
      </div>
      <div className="TechTextContainer">
        <div className="TechTabsContainer">
          <TechTabs TechPage={props.TechPage} Selector={props.target}/>
        </div>
        <div className="TextSummaryContainer">
          <h6 className="altColor">THE TERMINOLOGY ...</h6>
          <h2>{props.name.toUpperCase()}</h2>
          <h6 className="altColor">{props.desc}</h6>
        </div>
      </div>
      <div className="TechImgContainer">
        <img className={hidden ? "hidden" : ""}  src={imgPosition}></img>
      </div>
    </div>
  );
}

export default Tech;
