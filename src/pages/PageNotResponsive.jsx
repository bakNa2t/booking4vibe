import styled from "styled-components";
import PropTypes from "prop-types";

import Logo from "../ui-blocks/Logo";
import Button from "../ui-blocks/Button";

const PageResponsive = styled.div`
  @media screen and (max-width: 868px) {
    display: none;
  }
`;

const StyledPageNotResponsive = styled.div`
  @media screen and (max-width: 868px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 2.4rem;
    height: 100vh;
    background-color: var(--color-emerald-50);
  }
  @media screen and (min-width: 868px) {
    display: none;
  }
`;

function PageNotResponsive({ children }) {
  PageNotResponsive.propTypes = {
    children: PropTypes.node,
  };

  return (
    <>
      <PageResponsive>{children}</PageResponsive>
      <StyledPageNotResponsive>
        <Logo />
        The Mobile Design is not still Responsive ! You can Check the App on
        desctop version.
        <a
          href="https://github.com/bakna2t/booking4vibe"
          target="_blank"
          rel="noreferrer"
        >
          <Button>Booking4Vibe Repo</Button>
        </a>
      </StyledPageNotResponsive>
    </>
  );
}

export default PageNotResponsive;
