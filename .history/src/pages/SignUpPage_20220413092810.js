import React, { useState } from "react";
import styled from "styled-components";
import { Label } from "../components/label";
import { useForm } from "react-hook-form";
import { Input } from "../components/input";

import IconEyeClose from "components/icon/IconEyeClose";
import Field from "components/field";

const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  .logo {
    margin: 0 auto 20px;
  }
  .heading {
    text-align: center;
    color: ${(props) => props.theme.primary};
    font-weight: bold;
    font-size: 40px;
    margin-bottom: 60px;
  }
  .field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }

  .form {
    max-width: 600px;
    margin: 0 auto;
  }
`;
const SignUpPage = () => {
  const { control } = useForm();
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="../logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form className="form" autoComplete="off">
          <Field>
            <Label htmlFor="fullname" className="label">
              Fullname
            </Label>
            <Input
              name="fullname"
              type="text"
              placeholder="Enter your fullname"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="email" className="label">
              Email address
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              control={control}
            ></Input>
          </Field>
          <Field>
            <Label htmlFor="password" className="label">
              Password address
            </Label>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              control={control}
            >
              <IconEyeClose
                className="input-icon"
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            </Input>
          </Field>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
