import FormUserDataUpdating from "../base-blocks/authentication/FormUserDataUpdating";
import Heading from "../ui-blocks/Heading";
import Row from "../ui-blocks/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <FormUserDataUpdating />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <p>Update user password form</p>
      </Row>
    </>
  );
}

export default Account;
