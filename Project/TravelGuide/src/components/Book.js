import React from "react";
import talukamaval from "../components/img/talukamaval.jpg";
import goldvalley from "../components/img/goldvalley.jpg";
import little from "../components/img/little.jpg";
import Registeration from "../components/Registeration";
import { NavLink } from "react-router-dom";

function Book() {
  return (
    <div className="book">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                Food{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                HOTEL
              </a>
            </li>
          </ul>
        </div>

        {/* book section */}
        <div className="card-body">
          <h5 className="card-title">Top Hotel Collections</h5>
          <p className="card-text">Special items povided according to state wise</p>
          <NavLink to="/SignUp"> Book Now</NavLink>
        </div>

        <div className="card-group">
          <div className="card">
            <img src={talukamaval} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Facilities: Parking , Wifi , Bar , Food</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={goldvalley} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This card has supporting text below as a natural lead-in to
                additional content.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
          <div className="card">
            <img src={little} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
