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
import Button from '../../ui/buttons/Button';

// ------------------------------
// Styled Componenets
// ------------------------------
// This section has all CSS styles configured for every HTML element.
const StyledLanding = styled.div`
  background: url('backgrounds/elpaso.jpg');
  background-size: cover;
  min-height: 100vh;
  position: relative; /* Add position relative for overlay */
  overflow: hidden; /* Ensure overlay doesn't overflow */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(
    0,
    0,
    0,
    0.3
  ); /* Adjust the opacity (last value) as needed */
`;

const LandingIntroduction = styled.div`
  position: relative; /* Ensure content is stacked on top of the overlay */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1; /* Ensure content is above the overlay */
`;

const Title = styled.span`
  font-size: var(--font-xlarge);
  text-transform: uppercase;
  margin: 0 auto;
  text-align: center;
  padding-top: var(--padding-xxlarge);
  line-height: 3.75rem;
  color: white; /* Set text color */
`;

const SubTitle = styled.span`
  font-size: var(--font-xxsmall);
  text-transform: uppercase;
  margin: 0 auto;
  text-align: center;
  padding-top: var(--padding-small);
  color: white; /* Set text color */
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  padding: 10rem;
`;
// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Landing() {
  return (
    <>
      <StyledLanding>
        <Overlay>
          <LandingIntroduction>
            <Title>Millennium 2000</Title>
            <SubTitle>real estate company based in El Paso, TX</SubTitle>
          </LandingIntroduction>
        </Overlay>
      </StyledLanding>
      <ButtonArea>
        <Button>Explore local real estate</Button>
      </ButtonArea>
    </>
  );
}

export default Landing;
