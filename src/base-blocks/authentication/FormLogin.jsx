import { useState } from "react";

import Button from "../../ui-blocks/Button";
import Form from "../../ui-blocks/Form";
import Input from "../../ui-blocks/Input";
import FormRowVertical from "../../ui-blocks/FormRowVertical";

function LoginForm() {
  const [email, setEmail] = useState("junior@mail.io");
  const [password, setPassword] = useState("12345678");

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;
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
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large">Login</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
