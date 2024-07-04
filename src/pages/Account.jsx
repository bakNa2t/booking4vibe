import FormUserDataUpdating from "../base-blocks/authentication/FormUserDataUpdating";
import FormPasswordUpdating from "../base-blocks/authentication/FormPasswordUpdating";
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
        <FormPasswordUpdating />
      </Row>
    </>
  );
}

export default Account;
