import React from "react";
// import InputName from "../inputInfo/inputName";
import styled from "styled-components";
const Button = styled.button`
  width: 343px;
  height: 62px;
  background: #a2a2a2;
  border-radius: 31px;
  outline: none;
  border: none;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-top: 23px;
  margin-bottom: 53px;
`;



const ButtonSignUp = () => {
  const checkForm = () => {
    console.log('jelksmlkv');
  }

  return <Button onClick={ checkForm }>Sign up</Button>;
};

export default ButtonSignUp;
