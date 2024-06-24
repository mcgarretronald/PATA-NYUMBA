import React from "react";

function Modalform() {
  return (
    <>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
          House Size (number of Bedrooms)
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
       
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Price
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
     
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
export default Modalform;
