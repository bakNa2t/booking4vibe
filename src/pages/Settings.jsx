import SettingsUpdatingForm from "../base-blocks/settings/SettingsUpdatingForm";
import Heading from "../ui-blocks/Heading";
import Row from "../ui-blocks/Row";

function Settings() {
  return (
    <Row>
      <Heading as="h1">Update hotel settings</Heading>
      <SettingsUpdatingForm />
    </Row>
  );
}
export default Settings;
