import { useState } from "react";

import Button from "../../ui-blocks/Button";
import FileInput from "../../ui-blocks/FileInput";
import Form from "../../ui-blocks/Form";
import FormRow from "../../ui-blocks/FormRow";
import Input from "../../ui-blocks/Input";

import { useGetUser } from "./useGetUser";
import { useUpdateUser } from "./useUpdateUser";

function FormUserDataUpdating() {
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useGetUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>

      <FormRow label="Full name">
        <Input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          disabled={isUpdating}
        />
      </FormRow>

      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>

      <FormRow>
        <Button type="reset" variation="secondary" disabled={isUpdating}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default FormUserDataUpdating;
