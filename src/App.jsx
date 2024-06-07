import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const StyledApp = styled.main`
  background-color: var(--color-emerald-200);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <h1>BookingSpot</h1>
      </StyledApp>
    </>
  );
}

export default App;
