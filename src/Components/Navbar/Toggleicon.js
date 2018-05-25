import React from 'react';
import '../../Styles/Navbar/Toggleicon.css'
import menuicon from '../../Icons/menuicon.png'

class Toggleicon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {clicked : false}
        this.toggle = this.toggle.bind(this);
     };

    toggleMenu = () => {
        this.props.toggleMenu();
    }
    toggle() {
        this.setState({clicked: !this.state.clicked});
        // window.alert("in toggle class : " + this.state.clicked);
        this.toggleMenu();
    }
    render(props) {
        return (
            <div className="toggleicon" onClick={this.toggle}>
                <img src={menuicon} alt="togglebtn"/>
            </div>
        );
    }
}

export default Toggleicon;

