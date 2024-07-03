import { HiArrowRightOnRectangle } from "react-icons/hi2";

import ButtonIcon from "../../ui-blocks/ButtonIcon";
import SpinnerSmall from "../../ui-blocks/SpinnerSmall";

import { useLogOut } from "./useLogOut";

function LogOut() {
  const { logout, isLoading } = useLogOut();

  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerSmall />}
    </ButtonIcon>
  );
}

export default LogOut;
