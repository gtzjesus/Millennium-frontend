// ------------------------------
// File: Home.jsx
// ------------------------------
// Description: React Home Page (we call all components here).
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
const ResponsiveContainer = styled.div`
  // Responsive code logic
  @media (min-width: 768px) {
    max-width: 600px; /* Adjust as needed */
    margin: 0 auto; /* Center the container horizontally */
    padding: 0 20px;
  }
`;

// ------------------------------
// Component
// ------------------------------
// This section has our React Component which handles the hook data
function Home() {
  return (
    <>
      <ResponsiveContainer></ResponsiveContainer>
    </>
  );
}

export default Home;
