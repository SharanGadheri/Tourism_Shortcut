import React from "react";

function hotelBooking() {
  return (
    <>
      <h4>customer hotel booking form</h4>
      <div class="register">
        <div class="col-md-12">
          <div class="col-md-6">
            <label>First Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            />
            <label>Last Name</label>
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              placeholder=" email"
              aria-label="email"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Mobile
            </label>
            <input
              type="mobile"
              class="form-control"
              placeholder="mobile"
              aria-label="mobile"
            />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Choose...</option>
              <option>jaipur</option>
              <option>shimla</option>
              <option>rajasthan</option>
              <option>jodhpur</option>
              <option>delhi</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default hotelBooking;
