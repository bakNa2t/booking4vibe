import styled from "styled-components";

import FormSignup from "../base-blocks/authentication/FormSignup";
import Heading from "../ui-blocks/Heading";
import Logo from "../ui-blocks/Logo";

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
      <Logo />
      <Heading as="h4">Sign up for an account</Heading>
      <FormSignup />
    </SignupLayout>
  );
}

export default Signip;
