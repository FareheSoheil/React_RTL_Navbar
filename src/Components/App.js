import React, { Component } from 'react'; 
import {
  Route,
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
        <HashRouter>
          <div>
            <div className="cardContainer">
              {/* <Route path="/" component={Home}/> */}
              <Route path="/Product" component={Product}/>
              <Route path="/Introduction" component={Introduction}/>
              <Route path="/ContactUS" component={ContactUs}/>
              <Route path="/AboutUs" component={AboutUs}/>
            </div>
          </div>
      </HashRouter>
      </div>
    );
  }
}
export default App;
