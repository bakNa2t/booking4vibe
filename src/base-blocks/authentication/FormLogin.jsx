import { useState } from "react";

import Button from "../../ui-blocks/Button";
import Form from "../../ui-blocks/Form";
import Input from "../../ui-blocks/Input";
import FormRowVertical from "../../ui-blocks/FormRowVertical";

import { login } from "../../services/apiAuth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDeafault();

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
