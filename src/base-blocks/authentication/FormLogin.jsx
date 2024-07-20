import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import styled from "styled-components";

import Button from "../../ui-blocks/Button";
import Form from "../../ui-blocks/Form";
import Input from "../../ui-blocks/Input";
import SpinnerSmall from "../../ui-blocks/SpinnerSmall";
import FormRowVertical from "../../ui-blocks/FormRowVertical";
import WrapperIcon from "../../ui-blocks/WrapperIcon";

import { useLogIn } from "./useLogIn";
import ButtonIcon from "../../ui-blocks/ButtonIcon";

const FromFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding: 0.6rem 2.4rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const { login, isLoading } = useLogIn();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // Improves UX for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>

      <FormRowVertical label="Password">
        <InputWrapper>
          <Input
            type={isVisiblePassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          {password && (
            <WrapperIcon
              fontSize="medium"
              onClick={() => setIsVisiblePassword(!isVisiblePassword)}
            >
              {isVisiblePassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </WrapperIcon>
          )}
        </InputWrapper>
      </FormRowVertical>

      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerSmall />}
        </Button>
      </FormRowVertical>

      <FromFooter>
        <ButtonIcon onClick={() => navigate("/signup")}>
          Don&apos;t have an account? Sign up
        </ButtonIcon>
      </FromFooter>
    </Form>
  );
}

export default LoginForm;
