import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSideBar = styled.aside`
  background-color: var(--color-emerald-0);
  padding: 2rem 3rem;
  border-right: 1px solid var(--color-emerald-200);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function SideBar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />

      <Uploader />
    </StyledSideBar>
  );
}

export default SideBar;
