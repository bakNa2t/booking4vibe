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
  font-size: 2.4rem;
  padding: 0.2rem 1.6rem;
  cursor: pointer;
  font-weight: 600;
  color: var(--color-emerald-600);
  border-radius: var(--border-radius-sm);

  &:hover {
    color: var(--color-emerald-500);
    background-color: var(--color-emerald-100);
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
      <Title onClick={() => navigate("/")}>Booking4vibe</Title>
      <HeaderMenuWrapper>
        <AvatarUser />
        <HeaderMenu />
      </HeaderMenuWrapper>
    </StyledHeader>
  );
}

export default Header;
