import React from 'react'
import {
  Route,
  HashRouter
} from 'react-router-dom'
import Navbar from './Navbar/Navbar.js'
import ContactUs from './Contents/ContactUs/ContactUs'
import AboutUs from './Contents/AboutUs/AboutUs'
import Introduction from './Contents/Introduction/Introduction'
import Product from './Contents/Product/Product'
import Home from './Contents/Home/Home'
import '../Styles/global.css'
import '../Styles/App.css'
import '../Styles/samimFont.css'

class App extends React.Component {
  render () {
    return (
      <div className="App ">
        <Navbar/>
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
    )
  }
}
export default App
