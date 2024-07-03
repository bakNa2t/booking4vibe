import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import AvatarUser from "../base-blocks/authentication/AvatarUser";

const StyledHeader = styled.header`
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  background-color: var(--color-emerald-0);
  padding: 2rem 4rem;
  border-bottom: 1px solid var(--color-emerald-200);
`;

function Header() {
  return (
    <StyledHeader>
      <AvatarUser />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
