import styled from "styled-components";

const StyledHeader = styled.header`
  background-color: var(--color-emerald-0);
  padding: 2rem 4rem;
  border-bottom: 1px solid var(--color-emerald-200);
`;

function Header() {
  return <StyledHeader>Header Block</StyledHeader>;
}

export default Header;
