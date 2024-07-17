import styled from "styled-components";
import PropTypes from "prop-types";

const PageResponsive = styled.div`
  @media screen and (max-width: 768px) {
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
    </>
  );
}

export default PageNotResponsive;
