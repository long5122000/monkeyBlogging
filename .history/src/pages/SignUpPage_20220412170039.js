import React from "react";
import styled from "styled-components";
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
  .label {
    color: ${(props) => props.theme.grayDark};
    font-weight: 600;
    cursor: pointer;
  }
  .input {
    padding: 20px;
    width: 100%;
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
  .input:focus {
    background-color: #fff;
    border-color: ${(props) => props.theme.primary};
  }
  .input::-webkit-input-placeholder {
    color: #84878b;
  }
  .input::-moz-input-placeholder {
    color: #84878b;
  }
  .form {
    min-width: 800px;
    margin: 0 auto;
  }
`;
const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="../logo.png 2x" alt="monkey-blogging" className="logo" />
        <h1 className="heading">Monkey Blogging</h1>
        <form>
          <div className="field">
            <label htmlFor="fullname" className="label">
              Fullname
            </label>
            <input
              type="text"
              className="input"
              placeholder="Enter your fullname"
            />
          </div>
        </form>
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
