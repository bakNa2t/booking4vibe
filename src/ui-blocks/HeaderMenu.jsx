import { useNavigate } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi2";
import styled from "styled-components";

import LogOut from "../base-blocks/authentication/LogOut";
import ButtonIcon from "./ButtonIcon";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.6rem;
`;

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <LogOut />
      </li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
