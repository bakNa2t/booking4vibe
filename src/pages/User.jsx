import Heading from "../ui-blocks/Heading";
import FormSignup from "../base-blocks/authentication/FormSignup";

function User() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <FormSignup />
    </>
  );
}

export default User;
