import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Heading from "./ui-blocks/Heading";
import Button from "./ui-blocks/Button";
import Input from "./ui-blocks/Input";
import Row from "./ui-blocks/Row";

const StyledApp = styled.main`
  padding: 2rem 10rem;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Booking For Vibe</Heading>
            <div>
              <Heading as="h2">Check-in and -out </Heading>
              <Button>Check in</Button>
              <Button variation="secondary" size="small">
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <form>
              <Heading as="h3">Forms input</Heading>
              <Input type="number" placeholder="Enter your phone" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
