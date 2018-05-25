import React, { Component } from 'react';
import { FAB } from 'react-material-design';  
import Navbar from './Components/Navbar/Navbar.js';
import  './Styles/global.css'
class App extends Component {
  render() {
    return (      
      <div className="App ">
        <Navbar /> 
        {/* <div>content</div> */}
        {/* <FAB
        location="floating-bottom-right"
        icon="create"
    />, */}
      </div>
    );
  }
}
export default App;
