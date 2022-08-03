import React from 'react';
import talukamaval from "../components/img/talukamaval.jpg";
import goldvalley from "../components/img/goldvalley.jpg";
import little from "../components/img/little.jpg"
import Registeration from "../components/Registeration";


function Book() {
  return (
    <div class="book">
        
        
        <div class="card text-center">
        
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" aria-current="true" href="#">Food </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">HOTEL</a>
      </li>
   
    </ul>
  </div>
  
  {/* book section */}
  <div class="card-body">
    <h5 class="card-title">Top Hotel Collections</h5>
    <p class="card-text">Special items povided according to state wise</p>
    <a href="/Registeration" class="btn btn-primary">Book Now</a>
  </div>

  <div class="card-group">
  <div class="card">
    <img src={talukamaval} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Facilities: Parking , Wifi , Bar , Food</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={goldvalley}class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
  <div class="card">
    <img src={little} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
</div>
</div>
 </div>
  )
}

export default Book