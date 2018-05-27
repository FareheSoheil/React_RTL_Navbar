import React from 'react';
import '../../Styles/Navbar/NavItem.css'
import {
    NavLink,
    HashRouter
  } from "react-router-dom";

class NavItem extends React.Component {
    render(props) {
        return (
            <HashRouter>
                <div className="navItem" >
                    <NavLink to={this.props.url}>
                        {this.props.children} 
                    </NavLink>
                </div>
            </HashRouter>
        );
    }
}

export default NavItem;