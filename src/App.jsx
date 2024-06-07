import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Heading from "./ui-blocks/Heading";
import Button from "./ui-blocks/Button";
import Input from "./ui-blocks/Input";

const StyledApp = styled.main`
  background-color: var(--color-emerald-200);
  padding: 2rem 10rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Booking For Vibe</Heading>
        <Heading as="h2">Check-in and -out </Heading>
        <Button>Check in</Button>
        <Button>Check out</Button>
        <Heading as="h3">Forms input</Heading>
        <Input type="number" placeholder="Enter your phone" />
      </StyledApp>
    </>
  );
}

export default App;
