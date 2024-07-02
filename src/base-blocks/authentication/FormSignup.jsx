import { useForm } from "react-hook-form";

import Button from "../../ui-blocks/Button";
import Form from "../../ui-blocks/Form";
import FormRow from "../../ui-blocks/FormRow";
import Input from "../../ui-blocks/Input";

function SignupForm() {
  const { register, formState, getValues } = useForm();
  const { errors } = formState;

  return (
    <Form>
      <FormRow label="Full name" error={""}>
        <Input
          type="text"
          id="fullName"
          {...register("fullName", { required: "Full name is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={""}>
        <Input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
            pattern: /\S+@\S+\.\S+/,
            message: "Pleasw enter a valid email",
          })}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={""}>
        <Input
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={""}>
        <Input
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "Password confirm is required",
            validate: (value) =>
              value === getValues().passowrd || "Passwords must match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
