import styled from "styled-components";

const ButtonIcon = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-emerald-100);
    &::before {
      content: "${(props) => props.popuptext}";
      color: var(--color-brand-600);
      font-size: 1rem;
      font-weight: 400;
      /* margin-right: 0.4rem; */
      position: absolute;
      top: -1rem;
      right: 50%;
      transform: translateX(50%);
      width: max-content;
    }
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;

export default ButtonIcon;
