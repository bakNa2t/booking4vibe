import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSideBar = styled.aside`
  background-color: var(--color-emerald-0);
  padding: 2rem 4rem;
  border-right: 1px solid var(--color-emerald-200);

  grid-row: 1 / -1;
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />
    </StyledSideBar>
  );
}

export default SideBar;
