import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  cursor: pointer;
  padding: 20px;
  line-height: 1;
  color: white;
  background-image: linear-gradient(
    to right bottom,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secomdary}
  );
`;
const Button = () => {
  return <button>Sign Up</button>;
};

export default Button;
