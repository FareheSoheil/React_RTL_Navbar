import React from 'react';
import '../../Styles/Navbar/NavItem.css'

class NavItem extends React.Component {
    render(props) {
        return (
            <div className="navItem">
                {this.props.children}
            </div>
        );
    }
}

export default NavItem;