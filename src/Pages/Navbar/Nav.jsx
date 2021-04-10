import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Berita API</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink>
              <Link to="/cnbc-news">CNBC</Link>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
              <Link to="/bbc-news">BBC</Link>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
              <Link to="/tempo-news">TEMPO NEWS</Link>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
              <Link to="/republika-news">REPUBLIKA</Link>
              </NavLink>
            </NavItem>
            <NavItem>
            <NavLink>
              <Link to="/okezone-news">OKEZONE</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
