import React, { useState, useEffect } from "react";
import axios from "axios";
import srinagar from "../components/img/srinagar2.jpg";
import jaipur from "../components/img/jaipur.jpg";
import rajsthan from "../components/img/rajsthan.jpg";
import Andaman from "../components/img/Andaman.jpg";
import { Typography } from "@mui/material";
import {Link} from "react-router-dom";

const Packages = () => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUser(result.data);
  };
  return (
    <div classNameName="packages">
      <h3 style={{textAlign:"center"}}>India Tour Packages</h3>
      <br></br>
      <p style={{margin:"3px 20px"}}>
        About India Tourism: A South Asian nation synonymous with the phrase
        “unity in diversity,” India is a land of rich culture and heritage. It’s
        known for its varied geographical terrain, historical monuments,
      </p>

      <p style={{margin:"3px 20px"}}>
        The best way to plan a trip to India is by region. When it comes to
        North India, the area comprises states like Uttarakhand, Rajasthan,
        Jammu and Kashmir, Delhi and Uttar Pradesh. It’s known for its
        breathtaking snowy terrain and the majestic Himalayas and is a paradise
        for skiing, hiking and trekking, snowboarding, camping, etc.
      </p>
    <br/>
    
    

      <h4 style={{textAlign:"center"}}>Popular Tour Packages for India</h4>
      <br/>

      <table className="table table-bordered" style={{margin:"3px 20px"}}>
        <thead className="table-info" style={{padding:"2px"}}>
          <tr style={{textAlign:"center"}}>
            <th scope="col">#</th>
            <th scope="col">Packages</th>
            <th scope="col">Price</th>
            <th scope="col">Days</th>
            <th scope="col">Inclusion</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody style={{textAlign:"center"}}>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.Packages}</td>
              <td>{user.Price}</td>
              <td>{user.Days}</td>
              <td>{user.Inclusion}</td>
              <td>
                <Link to="/view" className="btn btn-primary">view</Link>
              </td>
            </tr>
          ))}
        </tbody>



      </table>
      <h1>Top Places in India for tour packages</h1>
      <div className="row row-cols-1 row-cols-md-4 g-3">
        <div className="col">
          <div className="card h-100">
            <img src={srinagar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Wonders of Kashmir Tour Package</h5>
              <div>
                <i className="fa-solid fa-location-dot"></i>
                <p>Srinagar(2N) → Pahalgam(1N) </p>
                <i className="fa-solid fa-indian-rupee-sign"></i>
                <p>11,850 per adult onwa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={jaipur} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Wonders of jaipur Tour Package</h5>
              <i className="fa-solid fa-location-dot"></i>
              <p className="card-text">This is a short card.</p>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              <p>11,850 per adult onwa</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={rajsthan} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Wonders of rajsthan Tour Package</h5>
              <i className="fa-solid fa-location-dot"></i>
              <p className="card-text">Rajsthan-2N.</p>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              <p>20000 per adult onwa</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={Andaman} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">
                Wonders of Andaman Nicobar Tour Package
              </h5>
              <i className="fa-solid fa-location-dot"></i>
              <p className="card-text">Andaman Nicobar-2S.</p>
              <i className="fa-solid fa-indian-rupee-sign"></i>
              <p>30000 per adult onwa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
