import React from "react";
class NavbarBrand extends React.Component {
  render(props) {
    return (
      <div>
        <img src={this.props.src} alt="branName" />
      </div>
    );
  }
}
export default NavbarBrand;
