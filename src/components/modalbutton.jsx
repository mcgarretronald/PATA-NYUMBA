import React from "react";
import Modalform from "./modalform";

function ModalButton() {

  
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{ borderColor: 'white' }}
      >
        ADD HOUSE
      </button>

      {/* MODAL */}
      {/* <!-- Vertically centered modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalLabel"
                style={{ color: 'white', marginLeft: '40%' }}
              >
                Add House
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ color: 'white' }}>


              <Modalform />



            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalButton;
