import React, { Component } from 'react'; 
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Navbar from './Navbar/Navbar.js';
import ContactUs from './Contents/ContactUs';
import AboutUs from './Contents/AboutUs';
import Introduction from './Contents/Introduction';
import Product from './Contents/Product';
import Home  from './Contents/Home';

import  '../Styles/global.css'
import  '../Styles/App.css'
import '../Styles/samimFont.css'

class App extends Component {
  render() {
    return (      
      <div className="App ">
        <Navbar /> 
        <div className="cardContainer">
          <Home />
          {/* <AboutUs /> */}
          {/* <Introduction /> */}
        </div>
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="content">
             
          </div>
        </div>
      </HashRouter>
      </div>
    );
  }
}
export default App;
