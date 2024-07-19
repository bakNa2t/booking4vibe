import { useForm } from "react-hook-form";
import { useState } from "react";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Button from "../../ui-blocks/Button";
import Form from "../../ui-blocks/Form";
import FormRow from "../../ui-blocks/FormRow";
import Input from "../../ui-blocks/Input";

import { useSignUp } from "./useSignUp";
import { useSignUpRegisterPage } from "./useSignUpRegisterPage";

const InputWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 1rem;
  transform: translateY(-50%);
  cursor: pointer;
  font-size: 1.4rem;
`;

function FormSignup() {
  const path = window.location.pathname;
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { signup, isLoading } = useSignUp();
  const { signupNewUser, isLoading: isLoading2 } = useSignUpRegisterPage();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    path === "/signup"
      ? signupNewUser({ fullName, email, password })
      : signup(
          { fullName, email, password },
          {
            onSettled: () => reset(),
          }
        );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isLoading || isLoading2}
          {...register("fullName", { required: "Full name is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isLoading || isLoading2}
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors?.password?.message}
      >
        <InputWrapper>
          <Input
            type={isVisiblePassword ? "text" : "password"}
            id="password"
            disabled={isLoading}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          <IconWrapper onClick={() => setIsVisiblePassword(!isVisiblePassword)}>
            {isVisiblePassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
          </IconWrapper>
        </InputWrapper>
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input
          type={isVisiblePassword ? "text" : "password"}
          id="passwordConfirm"
          disabled={isLoading || isLoading2}
          {...register("passwordConfirm", {
            required: "Password confirm is required",
            validate: (value) =>
              value === getValues().password || "Passwords must match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading || isLoading2}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default FormSignup;
