import React from "react";
import { Link } from "react-router-dom";
 import logo1 from "../components/img/logo1.jpg";

const Navbar = () => {
  return (
    <div className="nav">
      <a href="">
        <img src={logo1} /> 
      </a>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Book">Booking</Link>
          </li>
<<<<<<< HEAD
          <li>
           <Link to="/packages">Packages </Link> 
          </li>
=======
          <li>{/* <Link to="/packages">Packages </Link> */}</li>
>>>>>>> fbff220ca3d116c43dbe2c5e092b93b6739d942e
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Map">Map </Link>
          </li>
          <li>
            <Link to="/SignUp">SignUp</Link>
          </li>
          <li>{/* <Link to="/Registration">Registration</Link> */}</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
