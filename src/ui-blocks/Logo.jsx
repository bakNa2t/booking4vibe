import styled from "styled-components";

import { useDarkMode } from "../context/DarkModeContetx";

const StyledLogo = styled.div`
  text-align: center;
`;

const ImgReg = styled.img`
  height: 11rem;
  width: auto;
`;

const ImgLarge = styled.img`
  height: 15rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const pathName = window.location.pathname;

  const src = isDarkMode
    ? "images/b4v-logo-night.png"
    : "images/b4v-logo-day.png";

  return (
    <StyledLogo>
      {pathName === "/login" || pathName === "/signup" ? (
        <ImgLarge src={src} alt="Logo" />
      ) : (
        <ImgReg src={src} alt="Logo" />
      )}
    </StyledLogo>
  );
}

export default Logo;
