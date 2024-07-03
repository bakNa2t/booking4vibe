import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-emerald-0);
  padding: 2rem 4rem;
  border-bottom: 1px solid var(--color-emerald-200);
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: var(--color-emerald-600);
`;

function Header() {
  return (
    <StyledHeader>
      <Title>Booking 4 Vibe</Title>
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
