import React from 'react';
import '../Styles/DropdownItem.css'
import carret from '../Icons/dropdownicon.png'

class DropdownItem extends React.Component {
    render(props) {
        return (
            <div className="dropdownitem">
                {this.props.children}
                <img src={carret} alt="nothing"/>
            </div>
        );
    }
}

export default DropdownItem;