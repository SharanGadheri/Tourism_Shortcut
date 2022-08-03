import React from 'react'


import "../src/components/Nav.css"
import Home from "../src/components/Home";
import Book from "../src/components/Book"
import Packages from "../src/components/Packages"
import Registration from "./components/Registeration";
import Services from "../src/components/Services";
import Map from "./components/Map";
import SignUp from "../src/components/SignUp";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/components/Singnup.css";

import {
  BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';



const App = () => {
  return (
    <div>
          <BrowserRouter>
    <Navbar/>
<Routes>
<Route  path='/' element={< Home />}></Route>
<Route  path='/Book' element={< Book />}></Route>
<Route  path='/packages' element={< Packages />}></Route>
<Route  path='/Services' element={< Services />}></Route>

<Route  path='/Registration' element={< Registration />}></Route>
<Route  path='/SignUp' element={< SignUp />}></Route>

<Route  path='/Map' element={< Map />}></Route>

</Routes>
</BrowserRouter>
<Footer/>  

</div>

)
}

export default App;

