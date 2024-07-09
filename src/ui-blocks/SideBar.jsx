import { useState } from "react";
import { MdOutlineAdd, MdOutlineRemove } from "react-icons/md";
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

const BtnShowUploader = styled.button`
  position: fixed;
  bottom: 0.4rem;
  left: 0.4rem;
  z-index: 1000;
  border-radius: var(--border-radius-lg);

  /* outline: none; */
  /* border: none; */
  /* background-color: var(--color-emerald-0); */
`;

function SideBar() {
  const [showUploader, setShowUploader] = useState(false);

  return (
    <StyledSideBar>
      <Logo />
      <MainNav />

      <Uploader />
      <BtnShowUploader onClick={() => setShowUploader(!showUploader)}>
        {showUploader ? <MdOutlineRemove /> : <MdOutlineAdd />}
      </BtnShowUploader>
    </StyledSideBar>
  );
}

export default SideBar;
