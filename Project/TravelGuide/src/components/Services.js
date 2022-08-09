import React from 'react';
import survices from "../components/img/services1.jpg"

const Services = () => {
  return (
    
    
<div class="services">
  <img src={survices}  alt="..." style={{height: "70vh",width:"100%"}}/>
  <br></br>
  <br/>

        <h2 style={{textAlign:"center"}}>Travel and hotel supplies</h2>
        <br></br>
    <p>Houseboat Altaf offers 4-star accommodations with a terrace and Jacuzzi along the pristine ghats of Dal Lake near Nehru Park. Carpeted floors, ethnic linens and dining halls add to the glam interior.
    This may range from full silver service in a fine dining restaurant, where the dishes are served at the table by waiters with service spoons and forks, to a self-service cafeteria where guests collect their own food from the counter
    
</p>
    <table class="table table-bordered border-primary">
      <tr>
  <th><h5 style={{color:"red"}}>Meals and other inclusions</h5></th>
  <th> <h5 style={{color:"red"}}>Exclusions</h5></th>
  </tr>
  <tr>
  <td>04 nights accommodation in hotel.</td>
<td>Fllight tickets.</td>
  </tr>
  <tr>
<td>01 night accommodation in Houseboat.</td>
<td>Train tickets</td>
  </tr>
  <tr>
    <td>Daily breakfast and dinner</td>
    <td>Any medical/rescue evacuation due to mishaps.</td>
  </tr>
  <tr><td>Shikara ride at Dal Lake.</td>
  <td>Any personal expenses like laundry, table bills, camera fee, tips, etc.</td>
  </tr>
  <tr>
    <td>All sightseeing as per itinerary by Indica car</td>
    <td>Cost of horse ride, Gondola ride and any other recreational activities.</td>
  </tr>
  <tr>
    <td>Toll tax, parking, driver allowance.</td>
    <td>Entrance and guide fees</td>
  </tr>
  <tr>
    <td>All other applicable taxes.</td>

  </tr>
  <tr>
    <td>3.09% GST</td>
    <td>Any meals not specified in inclusions.</td>
  </tr>
</table>

<h1 style={{textAlign:"center"}}>Hotels in Jaipur</h1>
<p>Jaipur, the heritage city, has excellent stay options, from budget hotels to luxury resorts. Still, the experience that would make your trip to the Pink City unique is the traditional Havelis, which take you back to Jaipur’s history</p>
 </div>
  

      

  )
}

export default Services