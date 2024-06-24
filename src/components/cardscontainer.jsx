import React from "react";
import Housecard from "./housecard";

const Cardcontainer = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>HOUSES</h1>
      <div className="cardsContainer">
        <div className="row align-items-start">
          <Housecard />
          <Housecard />
          <Housecard />
          <Housecard />
          
          
        </div>
      </div>
      
    </>
  );
};
export default Cardcontainer;
