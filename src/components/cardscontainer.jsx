import React from "react";
import Housecard from "./housecard";
import firsthouse from "../assets/house-1.jpeg" 
import secondthouse from "../assets/house-2.jpeg"      
import thirdthouse from "../assets/house-3.webp" 
import fourthhouse from "../assets/house-3.webp"                                                                                                                 


const Cardcontainer = () => {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>HOUSES</h1>
      <div className="cardsContainer">
        <div className="row align-items-start">
          <Housecard  src={firsthouse} bedroom='2 bedroom'/>                                                                                                                            
          <Housecard src={secondthouse} bedroom='3 bedroom' />
          <Housecard src={thirdthouse} bedroom='4 bedroom'/>
          <Housecard src={fourthhouse} bedroom='5 bedroom'/>
     
        
          
          
        </div>
      </div>
      
    </>
  );
};
export default Cardcontainer;
