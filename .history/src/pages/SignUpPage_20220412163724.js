import React from "react";
import styled from "styled-components";
const SignUpPageStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
`;
const SignUpPage = () => {
  return (
    <SignUpPageStyles>
      <div className="container">
        <img srcSet="../logo.png 2x" alt="" />
      </div>
    </SignUpPageStyles>
  );
};

export default SignUpPage;
