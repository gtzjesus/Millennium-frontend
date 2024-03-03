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
  background: url('backgrounds/elpaso.jpg');
  background-size: cover;
  min-height: 100vh;

  /* Position the background slightly to the left */
  background-position: center left; /* You can adjust the positioning as needed */

  // Position object to the center
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  font-size: var(--font-xlarge);
  text-transform: uppercase;
  margin: 0 auto;
  text-align: center;
  padding-top: var(--padding-xxlarge);
`;
// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Landing() {
  return (
    <StyledLanding>
      <Title>
        Millennium <br /> 2000
      </Title>
    </StyledLanding>
  );
}

export default Landing;
