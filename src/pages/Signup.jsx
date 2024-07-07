import styled from "styled-components";

import FormSignup from "../base-blocks/authentication/FormSignup";
import Heading from "../ui-blocks/Heading";
import Logo from "../ui-blocks/Logo";
import DarkModeToggle from "../ui-blocks/DarkModeToggle";
import DarkModeWrapper from "../ui-blocks/DarkModeWrapper";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--color-emerald-50);
`;

function Signip() {
  return (
    <SignupLayout>
      <DarkModeWrapper>
        <DarkModeToggle />
      </DarkModeWrapper>
      <Logo />
      <Heading as="h4">Sign up for an account</Heading>
      <FormSignup />
    </SignupLayout>
  );
}

export default Signip;
