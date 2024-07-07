import { useGoBack } from "../hooks/useGoBack";

import styled from "styled-components";
import Heading from "../ui-blocks/Heading";
import Button from "../ui-blocks/Button";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-emerald-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-emerald-0);
  border: 1px solid var(--color-emerald-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const goBack = useGoBack();

  return (
    <StyledPageNotFound>
      <Box>
        <Heading as="h1">
          The page you are looking for could not be found (404)
        </Heading>
        <Button onClick={goBack} size="large">
          &larr; Go back
        </Button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
