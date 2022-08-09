import React from 'react'

import luxury from '../components/img/luxury.jpg'
import horse from '../components/img/horse.png'
import ranthambor from '../components/img/ranthambore.jpg'
import hawa from '../components/img/Hawa.jpg'
import tiger from '../components/img/tiger.jpg'
import delhi from '../components/img/delhi.jpg'
import delhi1 from '../components/img/delhi1.jpg'
import delhi2 from '../components/img/delhi2.jpg'
import golden from '../components/img/golden.jpg'



const View = () => {
  return (
    <>


      <div class="row no-gutters mb-3 mt-3 search-widget has-collection">
        <div class="col-12 hotels-atf px-md-3">
          <h2 class="hotel-heading" style={{ textAlign: "center" }}>
            Search your packages
          </h2>
          <p style={{ textAlign: "center" }}>select your checkIn and checkOut to book your package</p>
          <div class="row no-gutters pt-lg-2 justify-content-center">

            <div class="col-6 col-lg-auto search-item-container">
              <input type="date" class="form-control green" placeholder="Check In" style={{ display: "inline-block" }} />

            </div>
            <div class="col-6 col-lg-auto search-item-container">

              <input type="date" placeholder="Check Out" class="form-control red" /> </div>

            <div class="col-8 col-lg-auto search-item-container">
              <select class="form-control pl-2" id="adults">
                <option value="1adult" data-num-adults="1" id="a1">1 Adult</option>
                <option value="2adult" data-num-adults="2" id="a2" selected="selected">2 Adults</option>
                <option value="3adult" data-num-adults="3" id="a3">3 Adults</option>
                <option value="4adult" data-num-adults="4" id="a4">4 Adults</option>
                <option value="5adult" data-num-adults="5" id="a5">5 Adults</option>
                <option value="6adult" data-num-adults="6" id="a6">6 Adults</option>
                <option value="7adult" data-num-adults="7" id="a7">7 Adults</option>
                <option value="8adult" data-num-adults="8" id="a8">8 Adults</option>
                <option value="9adult" data-num-adults="9" id="a9">9 Adults</option>
                <option value="10adult" data-num-adults="10" id="a10">10 Adults</option>


              </select>

            </div>
            <div class="col-12 col-lg-auto search-item-container" style={{ display: "inline-block" }}>
              <input type="text" className="form-control" placeholder="Search here..." />
              <select>
                <option>Jaipur, Jodhpur, Udaipur</option>

                <option>Jaipur, Jodhpur, Jaisalmer</option>
                <option>	Jaipur</option>
                <option>	Delhi, Agra, Jaipur</option>
                <option>	shimla,srinagar</option>
                <option>	Rasthan</option>
              </select>

            </div>

          </div>
        </div>
      </div>



      {/* second */}
      <h1 style={{ textAlign: "center" }}>Jaipur packages</h1>
      <p>Jaipur, the capital of Rajasthan, is one of the most commonly visited cities in the country and owes its popularity to its rich culture, heritage and historical significance. Perfect for a getaway with friends and family, Holidify's Jaipur travel packages are completely customisable and take you across the various heritage sites, including Rajasthani and British-era structures.</p>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={luxury} className="img-fluid rounded-start" alt="..." style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1>₹ 14,500</h1>
              <h3>Pearls of Rajasthan Tour Package-Jaipur Hodhpur & Udaipur</h3>
              <h6>Royalty of Rajasthan: Tri-City Luxury Tour Package</h6>
              <h5 className="card-title" style={{ color: "red" }}>5 Nights / 6 Days</h5>
              <p> <i class="fa-solid fa-house" /> Twin-sharing rooms</p>
              <p> <i class="fa-solid fa-car"></i> sharing room Private AC cab with driver</p>

              <p> <i class="fa-solid fa-bowl-food"></i> Breakfast and meals</p>
              <p className="card-text">Optional Boating in Lake Pichola</p>
              <p className="card-text">Jaipur(2N) → Jodhpur(1N) → Jaisalmer(2N) → Jodhpur(1N)</p>

            </div>
          </div>
        </div>
        {/* third */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={horse} className="img-fluid rounded-start" alt="..." style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1>₹ 18,999</h1>
                <h3>Pearls of Rajasthan Tour Package - Jaipur Jodhpur & Udaipur</h3>
                <h5 className="card-title" style={{ color: "red" }}>5 Nights / 6 Days</h5>

                <p className="card-text">Jaipur(2N) → Jodhpur(1N) → Udaipur(2N)</p>
                <p> <i class="fa-solid fa-house" /> Twin-sharing rooms</p>
                <p> <i class="fa-solid fa-car"></i> sharing room Private AC cab with driver</p>

                <p> <i class="fa-solid fa-bowl-food"></i> Breakfast and meals</p>
                <p className="card-text">Optional Boating in Lake Pichola</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={ranthambor} className="img-fluid rounded-start" alt="..." style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1> ₹ 11200</h1>
                <h3>Charms of Chittorgarh with Jaipur & Ranthambore Tour Package</h3>
                <h5 className="card-title" style={{ color: "red" }}>5 Nights / 6 Days</h5>
                <p className="card-text">Jaipur(1N) → Chittorgarh(2N) → Ranthambore(2N)</p>
                <p> <i class="fa-solid fa-house" /> Twin-sharing rooms</p>
                <p> <i class="fa-solid fa-car"></i> sharing room Private AC cab with driver</p>

                <p> <i class="fa-solid fa-bowl-food"></i> Breakfast and meals</p>
                <p className="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={hawa} className="img-fluid rounded-start" alt="..." style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1>₹ 15,000</h1>

                <h3 className="card-title">Jaipur The Pink City Tour with Pushkar & Ajmer Day Trip</h3>
                <h5 className="card-title" style={{ color: "red" }}>5 Nights / 6 Days</h5>
                <p className="card-text">Jaipur(2N) → Pushkar(0N) → Ajmer(0N) → Jaipur(1N)</p>
                <p> <i class="fa-solid fa-house" /> Twin-sharing rooms</p>
                <p> <i class="fa-solid fa-car"></i> sharing room Private AC cab with driver</p>

                <p> <i class="fa-solid fa-bowl-food"></i> Breakfast and dinner</p>
                <p className="card-text"><small className="text-muted">Excursion to Ajmer and Pushkar</small></p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={delhi} className="img-fluid rounded-start" alt="..." style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1>₹ 11,000</h1>
                <h5 className="card-title" style={{ color: "red" }}>3 Nights / 4 Days</h5>
                <h5 className="card-title">Best Selling Golden Triangle Tour</h5>
                <p className="card-text">Delhi(2N) → Agra(1N) → Jaipur(2N)</p>
                <p className="card-text">Excursion to Mathura & Fatehpur Sikri</p>
                <p> <i class="fa-solid fa-house" /> Twin-sharing rooms</p>
                <p> <i class="fa-solid fa-car"></i> sharing room Private AC cab with driver</p>

                <p> <i class="fa-solid fa-bowl-food"></i> Breakfast and dinner</p>
                <p className="card-text">Parking charges, toll and driver's allowance</p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={tiger} className="img-fluid rounded-start" alt="..." style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1>₹ 13,000</h1>
                <h5 className="card-title" style={{ color: "red" }}>4 Nights / 5 Days</h5>
                <h5 className="card-title">Adventurous Jaipur & Ranthambhore Trip</h5>
                <p className="card-text">Jaipur(2N) → Ranthambore(2N)</p>
                <p className="card-text">Jeep Safari at Ranthambore</p>
                <p className="card-text">Boating at Crocodile Park</p>
                <p> <i class="fa-solid fa-house" /> Twin-sharing rooms</p>
                <p> <i class="fa-solid fa-car"></i> sharing room Private AC cab with driver</p>

                <p> <i class="fa-solid fa-bowl-food"></i> Breakfast and dinner</p>
                <p className="card-text">Parking charges, toll and driver's allowance</p>
              </div>
            </div>
          </div>
        </div>
        <h1>New delhi Packages</h1>
        <p>About Delhi Tourism: Boasting cultural diversity and rich heritage, Delhi is home to several temples, tombs, gardens, forts, museums, markets and more. Holidify's wide range of Delhi travel packages are suitable for all kinds of travellers and take you to some of the best spots in the city. So whether you are looking for a Delhi package for a historic getaway or just a Delhi holiday package with family and friends, pick the best one at Holidify.</p>

        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={delhi1} className="img-fluid rounded-start" alt="..." style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1>₹ 13,500</h1>
                <h5 className="card-title" style={{ color: "red" }}>4 Nights / 5 Days</h5>
                <h5 className="card-title">Scenic Delhi, Shimla and Manali Tour Package</h5>
                <p className="card-text">Delhi(0N) → Shimla(1N) → Kufri(0N) → Mashobra(0N) → Shimla(1N) → Kullu(0N) → Manali(2N)</p>
                <p> <i class="fa-solid fa-house" /> Twin-sharing rooms</p>
                <p> <i class="fa-solid fa-car"></i> sharing room Private AC cab with driver</p>

                <p> <i class="fa-solid fa-bowl-food"></i> Breakfast and dinner</p>

                <p className="card-text">Children below 5 years complimentary</p>
                <p>Excursion to Kufri, Mashobra, Naldehra, Rohtang Pass</p>
              </div>
            </div>
          </div>
        </div>
        {/* two */}
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={golden} className="img-fluid rounded-start" alt="..." style={{ width: "100%", height: "100%" }} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1>₹ 13,500</h1>
                <h5 className="card-title" style={{ color: "red" }}>4 Nights / 5 Days</h5>
                <h5 className="card-title">Best Selling Golden Triangle Tour</h5>
                <p className="card-text">Delhi(2N) → Agra(1N) → Jaipur(2N)</p>
                <p> <i class="fa-solid fa-house" /> Twin-sharing rooms</p>
                <p> <i class="fa-solid fa-car"></i> sharing room Private AC cab with driver</p>

                <p> <i class="fa-solid fa-bowl-food"></i> Breakfast and dinner</p>

                <p className="card-text">Children below 5 years complimentary</p>
                <p>Excursion to Kufri, Mashobra, Naldehra, Rohtang Pass</p>
              </div>
            </div>
          </div>
        </div>


      </div>



    </>

  )

}

export default View
