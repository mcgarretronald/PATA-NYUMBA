import React from "react";
import Modalbutton from "./modalbutton";


const Navbar = () => {
  // logic
  return (
    <>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid" >
          <a className="navbar-brand">Pata Nyumba</a>
          <Modalbutton/>
         
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit" style={{color:'white',border:'1px solid'}}>
              Search
            </button>
          </form>
        </div>
      </nav>
        
        
    
    </>
  );
};
export default Navbar;
