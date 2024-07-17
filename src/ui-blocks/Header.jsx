import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import AvatarUser from "../base-blocks/authentication/AvatarUser";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--color-emerald-0);
  padding: 2rem 4rem;
  border-bottom: 1px solid var(--color-emerald-200);
`;

const Title = styled.div`
  position: relative;
  font-family: "Merriweather", serif;
  font-size: 2.8rem;
  padding: 0.2rem 1.6rem;
  cursor: pointer;
  font-weight: 700;
  color: var(--color-emerald-600);
  border-radius: var(--border-radius-sm);
  z-index: 2;

  &:hover {
    color: var(--color-emerald-500);
    background-color: var(--color-emerald-100);
  }
  &::before {
    content: "4";
    font-family: inherit;
    font-size: 4.4rem;
    position: absolute;
    top: -1.4rem;
    left: 12.4rem;
    color: var(--color-brand-700);
    transform: rotate(15deg);
    z-index: -1;
  }
`;

const HeaderMenuWrapper = styled.div`
  display: flex;
  gap: 3.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <Title onClick={() => navigate("/")}>Booking Vibe</Title>
      <HeaderMenuWrapper>
        <AvatarUser />
        <HeaderMenu />
      </HeaderMenuWrapper>
    </StyledHeader>
  );
}

export default Header;
