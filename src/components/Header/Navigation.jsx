import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  Nav,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Navigation extends Component {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <div>
        <Navbar dark color="dark" expand="md">
          <div className="container">
            <NavbarBrand href="/home">Bohubrihi Restaurant</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/menu" className="nav-link">
                    Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
