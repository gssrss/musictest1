import React, { useState } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">YouMusic</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem >
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Music 
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Pop 
                </DropdownItem>
                <DropdownItem>
                  Jazz
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  More styles
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
            <NavItem >
              <NavLink href="/componentsssss/" >Sign in</NavLink>
            </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;