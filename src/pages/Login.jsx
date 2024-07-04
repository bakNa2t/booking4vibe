import styled from "styled-components";

import FormLogin from "../base-blocks/authentication/FormLogin";
import Logo from "../ui-blocks/Logo";
import Heading from "../ui-blocks/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3rem;
  background-color: var(--color-emerald-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <FormLogin />
    </LoginLayout>
  );
}

export default Login;
