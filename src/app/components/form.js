import React from "react";
import InputName from "./inputInfo/inputName";
import InputEmail from "./inputInfo/inputEmail";
import InputPassword from "./inputInfo/inputPassword";
import SelectCountry from "./selectCountry/selectCountry";
import ButtonSignUp from "./buttonSignUp/button";
import ChooseGender from "./chooseInfo/chooseGender";
import CheckTerms from "./check/checkTerms";
import styled from "styled-components";
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background: #ffffff;
  border-radius: 8px;

  .heading-form {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 28px;
    margin: 32px 0;
  }
`;

const RegistrationForm = () => {
  return (
    <Form>
      <span className="heading-form">Create a new account</span>
      <InputName />
      <InputEmail />
      <InputPassword />
      <SelectCountry />
      <ChooseGender />
      <CheckTerms />
      <ButtonSignUp />
    </Form>
  );
};

export default RegistrationForm;
