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
  color: var(--color-emerald-600);
  background-color: var(--color-emerald-50);
  border: 1px solid var(--color-emerald-600);

  &:hover {
    color: var(--color-emerald-50);
    background-color: var(--color-emerald-500);
  }
`;

const NoticeUploader = styled.div`
  position: fixed;
  bottom: 0.4rem;
  left: 3rem;
  z-index: 1000;
  margin: 0;
  font-size: 1rem;
  text-align: center;
  color: var(--color-emerald-600);
  font-weight: 500;
`;

function SideBar() {
  const [showUploader, setShowUploader] = useState(false);

  return (
    <StyledSideBar>
      <Logo />
      <MainNav />

      {showUploader && <Uploader />}
      <BtnShowUploader onClick={() => setShowUploader(!showUploader)}>
        {showUploader ? <MdOutlineRemove /> : <MdOutlineAdd />}
      </BtnShowUploader>
      {!showUploader && (
        <NoticeUploader>Refresh booking fake data</NoticeUploader>
      )}
    </StyledSideBar>
  );
}

export default SideBar;
