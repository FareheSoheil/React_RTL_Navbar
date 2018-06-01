import React from "react";
import NavItem from "../NavItem";
import {shallow } from "enzyme";

describe("<NavItem />", () => {
  it("renders a nav item ", () => {
    const Navitem = shallow(<NavItem url="abbas" />);
    expect(Navitem.find("div.navItem").length).toEqual(1);
  });
});
