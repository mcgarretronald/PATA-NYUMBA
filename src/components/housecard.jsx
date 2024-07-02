import React, { useState } from "react";
import houseImage1 from "../assets/house-1.jpeg";

const Housecard = (props) => {
  const [location, setLocation] = useState("Nairobi");
  const [price, setPrice] = useState("Ksh 12,000");
  const [likes, setLikes] = useState(0);

  function changePrice() {
    setPrice("Ksh 40,000");
    setLocation("Mombasa");
  }

  function counter() {
    setLikes((prevLikes) => prevLikes + 1);
  }


  

  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.src} className="card-img-top" alt="house image" />
        <div className="card-body" style={{ textAlign: "center" }}>
          <h5 className="card-title">{props.bedroom}</h5>
          <h5 className="card-title">{price} p.m</h5>
          <h5 className="card-title">{location}</h5>
          <button className="btn btn-primary" onClick={changePrice}>
            Buy house
          </button>
          <i
            className="far fa-heart"
            id="heart-icon"
           
            onClick={counter}
          >
            <span className="likes">{likes}</span>
          </i>
        </div>
      </div>
    </>
  );
};

export default Housecard;
