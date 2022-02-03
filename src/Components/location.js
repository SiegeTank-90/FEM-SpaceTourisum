import React, { useState } from "react";
import PlanetTabs from "./planetTabs.js"

function Location(props) {

  

  return (
    <div className="row">
      <div className="row align-self-start col-md-6 pe-1">
        <img className="planetSize" src={props.img}></img>
      </div>
      <div className="col-md-12 col-lg-5 ps-5">
        <PlanetTabs Find={props.Find} Selector={props.name}/>
        <h1>{props.name}</h1>
        <h5 className="altColor destinationTextContainer">{props.desc}</h5>
        <div className="row">
          <div className="col-md-6">
            <h6 className="subHeading2 altColor">AVG. DISTANCE</h6>
            <h6 className="subHeading">{props.distance}</h6>
          </div>
          <div className="col-md-6">
            <h6 className="subHeading2 altColor">EST. TRAVEL TIME</h6>
            <h6 className="subHeading ">{props.travel}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
