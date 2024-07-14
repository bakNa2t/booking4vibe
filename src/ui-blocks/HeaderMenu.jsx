import { useNavigate } from "react-router-dom";
import { LuUserCog } from "react-icons/lu";
import styled from "styled-components";

import LogOut from "../base-blocks/authentication/LogOut";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.6rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon
          innerText="Update account"
          onClick={() => navigate("/account")}
        >
          <LuUserCog />
        </ButtonIcon>
      </li>
      <li>
        <LogOut />
      </li>
      <li>
        <DarkModeToggle />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
