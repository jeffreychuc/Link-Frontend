import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar className="test" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">LINK</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            {/* <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem> */}
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              ABOUT
            </NavItem>
            <NavItem eventKey={2} href="#">
              FAQ
            </NavItem>
            <NavDropdown eventKey={3} title="More" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Contact Us</MenuItem>
              {/* <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem> */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
