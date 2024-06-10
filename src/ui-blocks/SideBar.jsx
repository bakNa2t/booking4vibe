import styled from "styled-components";

const StyledSideBar = styled.aside`
  background-color: var(--color-indigo-100);
  padding: 2rem 4rem;
  border-bottom: 1px solid var(--color-indigo-100);
`;

function SideBar() {
  return <StyledSideBar>Sidebar Block</StyledSideBar>;
}

export default SideBar;
