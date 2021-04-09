import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom"

function Navigation() {
    return (
        <div>
        <p>List Berita</p>
        <Nav>
          <NavItem>
            <Link to="/cnbc">CNBC</Link>
          </NavItem>
          <NavItem>
            <Link to="/bbc">BBC</Link>
          </NavItem>
          <NavItem>
          <Link to="/tempo-news">TEMPO NEWS</Link>
          </NavItem>
          <NavItem>
            <Link to="/republika">REPUBLIKA</Link>
          </NavItem>
          <NavItem>
            <Link to="/okezone">OKEZONE</Link>
          </NavItem>
        </Nav>
      </div>
    )
}

export default Navigation
