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
          <Navbar.Brand className="header-brand">
            <a href="#brand">
              <img
                src="https://res.cloudinary.com/trwong/image/upload/v1517261149/white-link_lnsvx8_stmdmf.png"
                alt="link-logo"
                className="link-logo"
                />
            </a>
            <span className="logo">Link</span>
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
            <NavItem eventKey={1} href="#" onClick={() => window.scrollTo(0, 0)}>
              Home
            </NavItem>
            <NavItem eventKey={2} href="#" onClick={ () => window.scrollTo(0, document.body.scrollHeight)}>
              About
            </NavItem>
            <NavItem eventKey={3} href="https://github.com/jeffreychuc/Link-Frontend" target="_blank">
              Github
            </NavItem>
            {/* <NavDropdown eventKey={4} title="More" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Contact Us</MenuItem> */}
              {/* <MenuItem eventKey={4.2}>Another action</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.3}>Separated link</MenuItem> */}
            {/* </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
