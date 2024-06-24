import React from "react";

const Housecard = () => {
  // Logic
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="card-img-top"
          alt="house image"
       />
        <div className="card-body" style={{textAlign:'center'}}>
          <h5 className="card-title">One Bedrrom</h5>
          <h5 className="card-title"> Price: 1.2M</h5>  <br />

          <a href="#" className="btn btn-primary">
            Buy house
          </a>
        </div>
      </div>
  
    </>
  );
};
export default Housecard;
