import styled from "styled-components";
import PropTypes from "prop-types";

import Heading from "./Heading";
import GlobalStyles from "../styles/GlobalStyles";

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: var(--color-emerald-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
  background-color: var(--color-emerald-0);
  border: 1px solid var(--color-emerald-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }

  & p {
    font-family: "Sono";
    margin-bottom: 3.2rem;
    color: var(--color-emerald-500);
  }
`;

function ErrorFallback({ error }) {
  ErrorFallback.propTypes = {
    error: PropTypes.object,
  };

  return (
    <>
      <GlobalStyles />
      <StyledErrorFallback>
        <Box>
          <Heading as="h1">There was an error</Heading>
          <p>{error.message}</p>
        </Box>
      </StyledErrorFallback>
    </>
  );
}

export default ErrorFallback;
