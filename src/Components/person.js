import React from "react";
import useWindowDimensions from "./windowDemension";

function Person(props) {
  let crewTabs = [
    <div className="crewTabs"> </div>,
    <div className="crewTabs"> </div>,
    <div className="crewTabs"> </div>,
    <div className="crewTabs"> </div>,
  ];

  crewTabs.splice(
    props.position,
    1,
    <div className="crewTabs-active"> </div>
  );
  
 
  if (useWindowDimensions().width < 375 ) {
    return (
      <div className="" onClick={props.Find}>
        <div className="crewImgContainer">
          <img className="crewImg" src={props.img} />
        </div>
        <div className="crewTextContainer">
          <div className="crewTabContainers">{crewTabs}</div>
          <h3 className="primaryColor crewHeader">
            {props.role.toUpperCase()}
          </h3>
          <h3 className="crewName">{props.name.toUpperCase()}</h3>
          <h5 className="crewBody altColor">{props.bio}</h5>
        </div>
      </div>
    );
  } else {

  return (
    <div className="" onClick={props.Find}>
      <div className="crewTextContainer">
        <h3 className="primaryColor crewHeader">{props.role.toUpperCase()}</h3>
        <h3 className="crewName">{props.name.toUpperCase()}</h3>
        <h5 className="crewBody altColor">{props.bio}</h5>
        <div className="crewTabContainers">{crewTabs}</div>
      </div>

      <div className="crewImgContainer">
        <img className="crewImg" src={props.img} />
      </div>
    </div>
  );
  }
}

export default Person;
