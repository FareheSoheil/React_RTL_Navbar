import React from 'react';
import  {Navbar , Nav , NavItem , NavDropdown , MenuItem} from 'react-bootstrap'

import '../../Styles/Navbar/navbar2.css'

class NavbarTwo extends React.Component {
    render() {
        return (
            <div >
                <div className="flex-container row-reverse test">
                    <div className="flex-item" >1</div>
                    <div className="flex-item" >2</div>
                    <div className="flex-item" >3</div>
                    <div className="flex-item" >4</div>
                </div>
                <Navbar inverse collapseOnSelect className="flex-container row-reverse">
                <Navbar.Header className="flex-item">
                    <Navbar.Brand>
                    <a href="#brand">React-Bootstrap</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse  className="flex-container row-reverse">
                    <Nav >
                    <NavItem eventKey={1} href="#">
                        Link
                    </NavItem>
                    <NavItem eventKey={2} href="#">
                        Link
                    </NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
                </div>
        );
    }
}

export default NavbarTwo;