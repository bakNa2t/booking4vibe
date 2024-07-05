import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import styled from "styled-components";

import FormLogin from "../base-blocks/authentication/FormLogin";
import Logo from "../ui-blocks/Logo";
import Heading from "../ui-blocks/Heading";
import ButtonIcon from "../ui-blocks/ButtonIcon";

import { useDarkMode } from "../context/DarkModeContetx";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3rem;
  background-color: var(--color-emerald-50);
`;

const DarkModeWrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
`;

function Login() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <LoginLayout>
      <DarkModeWrapper>
        <ButtonIcon onClick={toggleDarkMode}>
          {isDarkMode ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIcon>
      </DarkModeWrapper>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <FormLogin />
    </LoginLayout>
  );
}

export default Login;
