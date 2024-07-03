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
  font-weight: 600;
  color: var(--color-emerald-600);
`;

const HeaderMenuWrapper = styled.div`
  display: flex;
  gap: 3.4rem;
  align-items: center;
  justify-content: flex-end;
`;

function Header() {
  return (
    <StyledHeader>
      <Title>Booking4vibe</Title>
      <HeaderMenuWrapper>
        <AvatarUser />
        <HeaderMenu />
      </HeaderMenuWrapper>
    </StyledHeader>
  );
}

export default Header;
