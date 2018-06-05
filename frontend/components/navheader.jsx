import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

export default class NavHeader extends React.Component {
  constructor(props) {
    super(props);
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  smoothScroll(h) {
    let i = h || 0;
    if (i < 1000) {
      setTimeout(() => {
        window.scrollTo(0, i);
        this.smoothScroll(i + 30);
      }, 1);
    }
  }

  render() {
    return (
      <Navbar className="test" collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand className="header-brand">
            <a href="#brand">
              <img
                src="https://res.cloudinary.com/trwong/image/upload/v1517102892/white-link_lnsvx8.png"
                alt="link-logo"
                className="link-logo"
                />
            </a>
            <span className="logo">Link</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
          </Nav> */}
          <Nav pullRight>
            <NavItem eventKey={1} href="#" onClick={() => window.scrollTo(0, 0)}>
              Home
            </NavItem>
            <NavItem eventKey={2} href="#" onClick={ () => this.smoothScroll()}>
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
