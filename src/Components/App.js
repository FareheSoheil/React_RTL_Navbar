import React, { Component } from 'react'; 
import Navbar from './Navbar/Navbar.js';
import Content from './Contents/contactUs.js'
import  '../Styles/global.css'
import  '../Styles/App.css'
class App extends Component {
  render() {
    return (      
      <div className="App ">
        <Navbar /> 
        <div className="cardContainer">
          <Content  
            title='ارتباط با ما'
            desc= ' with over 6,000 species, ranging across all continents except Antarctica ' 
          />
        </div>
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
