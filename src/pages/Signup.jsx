import styled from "styled-components";
import Heading from "../ui-blocks/Heading";

const SignupLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3rem;
  background-color: var(--color-emerald-50);
`;

function Signip() {
  return (
    <SignupLayout>
      <Heading as="h4">This page is under construction</Heading>
    </SignupLayout>
  );
}

export default Signip;
