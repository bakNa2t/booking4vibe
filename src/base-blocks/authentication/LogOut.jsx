import styled from "styled-components";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

import ButtonIcon from "../../ui-blocks/ButtonIcon";
import SpinnerSmall from "../../ui-blocks/SpinnerSmall";

import { useLogOut } from "./useLogOut";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

function LogOut() {
  const { logout, isLoading } = useLogOut();

  return (
    <Wrapper>
      <ButtonIcon onClick={logout} disabled={isLoading}>
        {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerSmall />}
      </ButtonIcon>
      <h3>Log out</h3>
    </Wrapper>
  );
}

export default LogOut;