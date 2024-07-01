import { useState } from "react";

import Button from "../../ui-blocks/Button";
import Form from "../../ui-blocks/Form";
import Input from "../../ui-blocks/Input";
import SpinnerSmall from "../../ui-blocks/SpinnerSmall";
import FormRowVertical from "../../ui-blocks/FormRowVertical";

import { useLogIn } from "./useLogIn";

function LoginForm() {
  const [email, setEmail] = useState("junior@mail.io");
  const [password, setPassword] = useState("12345678");
  const { login, isLoading } = useLogIn();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login({ email, password });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerSmall />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
