import styled from "styled-components";
import { HiArrowRightOnRectangle } from "react-icons/hi2";

import ButtonIcon from "../../ui-blocks/ButtonIcon";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

function LogOut() {
  return (
    <Wrapper>
      <ButtonIcon>
        <HiArrowRightOnRectangle />
      </ButtonIcon>
      <h3>Log out</h3>
    </Wrapper>
  );
}

export default LogOut;
