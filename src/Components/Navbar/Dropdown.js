import React from 'react';
import '../../Styles/Navbar/Dropdown.css'
import carret from '../../Icons/dropdownicon.png'

class Dropdown extends React.Component {
    render(props) {
        return (
            <div className="dropdown">
                {this.props.children}
                <img src={carret} alt="nothing"/>
            </div>
        );
    }
}

export default Dropdown;