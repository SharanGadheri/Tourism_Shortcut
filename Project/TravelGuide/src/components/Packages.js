import React, { useState, useEffect } from "react";
import axios from "axios";
import srinagar from "../components/img/srinagar2.jpg";
import jaipur from "../components/img/jaipur.jpg";
import rajsthan from "../components/img/rajsthan.jpg";
import Andaman from "../components/img/Andaman.jpg";
import { Typography } from "@mui/material";

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
    <div className="packages">
      <h3>India Tour Packages</h3>
      <Typography>
        About India Tourism: A South Asian nation synonymous with the phrase
        “unity in diversity,” India is a land of rich culture and heritage. It’s
        known for its varied geographical terrain, historical monuments,
      </Typography>

      <p>
        The best way to plan a trip to India is by region. When it comes to
        North India, the area comprises states like Uttarakhand, Rajasthan,
        Jammu and Kashmir, Delhi and Uttar Pradesh. It’s known for its
        breathtaking snowy terrain and the majestic Himalayas and is a paradise
        for skiing, hiking and trekking, snowboarding, camping, etc.
      </p>
      <p>
        The region boasts heritage sites like the Mughal Taj Mahal, colonial
        Parliament House, Christ Church and the Namgyal Monastery, Badrinath
        Temple and Dilwara Temples. Visit Mehrangarh Fort, Red Fort and City
        Palace to know more about its tryst with royalty and experience riding
        shikaras across Dal Lake, shopping at Connaught Place or spotting tigers
        at Corbett National Park.
      </p>
      <p>
        Moving to the west, India tour packages include the beautiful beaches of
        Goa like Calangute Beach, heritage sites like Maharashtra’s Elephanta
        Caves and Gateway of India, Mahabaleshwar’s green valleys and the vast
        Rann of Kutch. Central India, primarily comprising Madhya Pradesh and
        Chhattisgarh, is well-known for the Kanha National Park that organises
        wildlife safaris and the nearly-impenetrable Gwalior Fort built by
        Babur.
      </p>
      <p>
        Champaran in Chhattisgarhs Raipur and Hajra in Bhilai frequently attract
        large crowds. As you go south, you would find yourself in awe of its
        temples like the Vithala Temple, Kurinji Temple and Karumadikkuttan.
        States like Karnataka, Kerala, Tamil Nadu and Andhra Pradesh welcome you
        with picturesque hill stations like Ooty and Coorg, expansive
        plantations and beaches like Paradise Beach. Mysore Palace and Lalbagh
        are pretty famous too.
      </p>

      <h4>Popular Tour Packages for India</h4>

      <table className="table  table-bordered">
        <thead className="table-info">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Packages</th>
            <th scope="col">Price</th>
            <th scope="col">Days</th>
            <th scope="col">Inclusion</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.Packages}</td>
              <td>{user.Price}</td>
              <td>{user.Days}</td>
              <td>{user.Inclusion}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Top Places in India for tour packages</h1>
      <div class="row row-cols-1 row-cols-md-4 g-3">
        <div class="col">
          <div class="card h-100">
            <img src={srinagar} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Wonders of Kashmir Tour Package</h5>
              <div>
                <i class="fa-solid fa-location-dot"></i>
                <p>Srinagar(2N) → Pahalgam(1N) </p>
                <i class="fa-solid fa-indian-rupee-sign"></i>
                <p>11,850 per adult onwa</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={jaipur} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Wonders of jaipur Tour Package</h5>
              <i class="fa-solid fa-location-dot"></i>
              <p class="card-text">This is a short card.</p>
              <i class="fa-solid fa-indian-rupee-sign"></i>
              <p>11,850 per adult onwa</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={rajsthan} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Wonders of rajsthan Tour Package</h5>
              <i class="fa-solid fa-location-dot"></i>
              <p class="card-text">Rajsthan-2N.</p>
              <i class="fa-solid fa-indian-rupee-sign"></i>
              <p>20000 per adult onwa</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={Andaman} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                Wonders of Andaman Nicobar Tour Package
              </h5>
              <i class="fa-solid fa-location-dot"></i>
              <p class="card-text">Andaman Nicobar-2S.</p>
              <i class="fa-solid fa-indian-rupee-sign"></i>
              <p>30000 per adult onwa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
