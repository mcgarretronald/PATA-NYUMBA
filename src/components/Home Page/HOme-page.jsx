import React from "react";
import house1 from '../../assets/house-1.jpeg';
import house2 from '../../assets/house-2.jpeg';
import house3 from '../../assets/house-3.webp';
import "./index.css";

function Homepage() {
  return (
    <>
    <div className="homepage">
    <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={house1} className="d-block w-100" alt="house image" />
          </div>
          <div className="carousel-item">
            <img src={house2} className="d-block w-100" alt="house image" />
          </div>
          <div className="carousel-item">
            <img src={house3} className="d-block w-100" alt="house image" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="text">
        <h1>Welcome to Pata Nyumba</h1>
        <p>
          At Pata Nyumba, we understand that finding the perfect home can be a daunting task. That's why we've made it our mission to simplify the process. Whether you're looking to buy your first house, upgrade to a larger space, or find a cozy place to settle down, our platform offers a comprehensive listing of properties to suit all your needs.
        </p>
        <p>
          Browse through our extensive collection of houses, compare prices, and explore neighborhoods—all from the comfort of your home. Our user-friendly interface makes it easy to filter search results based on your preferences, ensuring you find the perfect match quickly and efficiently.
        </p>
        <p>
          Join the thousands of satisfied homeowners who have found their dream homes with Pata Nyumba. Start your journey today and take the first step towards owning your ideal home.
        </p>
      </div>

    </div>
     
    </>
  );
}

export default Homepage;
