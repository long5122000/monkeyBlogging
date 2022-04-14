import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";

const InputStyles = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    padding: ${(props) => (props.hasIcon ? "20px 60px 20px 20px " : "20px")};
    background-color: ${(props) => props.theme.grayLight};
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s linear;
    border: 1px solid transparent;
  }
`;
const Input = ({
    name="",
    type="text",
    children,
    hasIcon= false,
    control,
    ...props
})=>{
    const {field} = useController({
        control,name,defaultValue="",
    })
}
return (
  <InputStyles hasIcon={hasIcon}>
    <input type={type} id={name} {...field} {...props} />
    {hasIcon ? <IconEyeOpen class="icon-eye"></IconEyeOpen> : null}
  </InputStyles>
);
