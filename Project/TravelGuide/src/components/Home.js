import React from 'react'

import SearchIcon from '@mui/icons-material/Search';



function Home() {
  return (
   
    <div className="homesection">
    <div className='Home' id="home">
     
     <h3>Adventures Trip </h3>
      <p>Discover new places with us, adventure awaits</p>
      <a href="/" className="btn">Discover  more</a>
      <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Search"/>
  <button className="btn btn-outline-success" type="submit">Search</button>
  </div>
</div>
</div>

    
  

 
  

   
  )
}

export default Home;