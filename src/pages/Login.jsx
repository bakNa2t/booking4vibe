import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import styled from "styled-components";

import FormLogin from "../base-blocks/authentication/FormLogin";
import Logo from "../ui-blocks/Logo";
import Heading from "../ui-blocks/Heading";
import ButtonIcon from "../ui-blocks/ButtonIcon";
import DarkModeWrapper from "../ui-blocks/DarkModeWrapper";

import { useDarkMode } from "../context/DarkModeContetx";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-emerald-50);
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
