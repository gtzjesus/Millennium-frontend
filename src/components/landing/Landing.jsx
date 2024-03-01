// ------------------------------
// File: Landing.jsx
// ------------------------------
// Description: React Landing Component.
// ------------------------------

// ------------------------------
// Imports
// ------------------------------
// This section has all necessary imports for this component.
import styled from 'styled-components';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledLanding = styled.div`
  // Code logic for setting the background
  // Design background from Figma software
  background: url('backgrounds/elpaso.jpg');
  background-size: cover;

  // Code logic for covering full-screen devices
  min-height: 100vh;
`;
// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Landing() {
  return <StyledLanding></StyledLanding>;
}

export default Landing;
