import styled, { css } from "styled-components";

const fontSizes = {
  extrasmall: css`
    font-size: 1.2rem;
  `,
  small: css`
    font-size: 1.4rem;
  `,
  medium: css`
    font-size: 1.6rem;
  `,
  large: css`
    font-size: 2rem;
  `,
};

const WrapperIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;

  ${(props) => fontSizes[props.fontSize]}
`;

export default WrapperIcon;
