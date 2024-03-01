// ------------------------------
// File: Navigation.jsx
// ------------------------------
// Description: React navigation Component (header).
// ------------------------------

import { useState } from 'react';
import styled from 'styled-components';

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledNavigation = styled.div`
  // Code logic to arrange children
  display: flex;
  align-items: center;
  justify-content: space-between;
  // Code logic for positioning fixed in all web app + header config
  position: fixed;
  background: transparent;
  color: var(--color-tan);
  width: var(--width-full-window);
  z-index: var(--z-top);
  height: var(--height-navigation);
`;

const Object = styled.div`
  padding: 0 var(--padding-small);
`;

const Link = styled.a``;

const Logo = styled.img`
  height: var(--font-xlarge);
  padding-top: var(--padding-large);
`;

const Menu = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  width: 40px; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  cursor: pointer;
  font-size: var(--font-xsmall);
  padding-right: var(--padding-xlarge);

  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 80%; /* Adjust the width of the lines */
    height: 3px; /* Adjust the height of the lines */
    background-color: white; /* Adjust the color of the lines */
    transition: all 0.3s ease;
  }

  ::before {
    top: 12px;
  }

  ::after {
    top: 24px;
  }

  /* Animation for the middle line */
  &.open-menu::before {
    top: 18px;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &.open-menu::after {
    top: 18px;
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;

const MenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isOpen }) => (isOpen ? '0' : '100%')}; /* Adjusted left property */
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  transition: left 0.3s ease-in-out;
  z-index: 999;
`;

const MenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

const MenuItem = styled.a`
  display: inline-block;
  padding: 8px 16px;
  background-color: black;
  color: white;
  border-radius: 20px;
  text-align: center;
  text-decoration: none;
  margin: 8px;
`;
// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <StyledNavigation>
        <Object>
          <Link target="_blank" href="https://www.m2k.realty.org">
            {/* <!--  Container for logo and title --> */}
            <Logo src="/icons/m2k.png" alt="millennium 2000"></Logo>
          </Link>
        </Object>
        <Object>
          {/* <!-- Menu Container for links --> */}
          <Menu onClick={toggleMenu}> {isMenuOpen ? 'Close' : 'Menu'}</Menu>
        </Object>
      </StyledNavigation>
      <MenuContainer isOpen={isMenuOpen}>
        <MenuContent>
          <MenuItem href="#">Realtors</MenuItem>
        </MenuContent>
      </MenuContainer>
    </>
  );
}

export default Navigation;
