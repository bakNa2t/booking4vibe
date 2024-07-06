import { MdOutlineLogout } from "react-icons/md";

import ButtonIcon from "../../ui-blocks/ButtonIcon";
import SpinnerSmall from "../../ui-blocks/SpinnerSmall";

import { useLogOut } from "./useLogOut";

function LogOut() {
  const { logout, isLoading } = useLogOut();

  return (
    <ButtonIcon onClick={logout} disabled={isLoading}>
      {!isLoading ? <MdOutlineLogout /> : <SpinnerSmall />}
    </ButtonIcon>
  );
}

export default LogOut;
