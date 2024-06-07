import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Heading from "./ui-blocks/Heading";
import Button from "./ui-blocks/Button";
import Input from "./ui-blocks/Input";

const StyledApp = styled.main`
  background-color: var(--color-emerald-200);
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading>BookingSpot</Heading>
        <Button>Click me</Button>
        <Input type="number" placeholder="Enter your phone" />
      </StyledApp>
    </>
  );
}

export default App;
