import React, { useState } from "react";
import {
  Button,
  Form,
  HeadingForm,
  Spiner,
  ButtonActive,
} from "./styles/style";
import { Name } from "./inputName";
import { InputEmail } from "./inputEmail";
import { InputPassword } from "./inputPassword";
import { SelectCountry } from "./selectCountry";
import { useForm, FormProvider } from "react-hook-form";
import { ChooseGender } from "./chooseGender";
import { CheckTerms } from "./checkTerms";

const RegistrationForm = () => {
  const methods = useForm();
  const [clickButton, setclickButton] = useState(true);
  const onSubmit = (data) => {
    setclickButton(false);
    console.log(data);
    setTimeout(() => {
      setclickButton(true);
      methods.reset();
    }, 10000);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>
        <HeadingForm>Create a new account</HeadingForm>
        <Name />
        <InputEmail />
        <InputPassword />
        <SelectCountry />
        <ChooseGender />
        <CheckTerms />
        {!methods.watch().userName ||
        !methods.watch().email  ||
        !methods.watch().password||
        !methods.watch().country ||
        !methods.watch().gender ||
        !methods.watch().checkTerms ? (
          <Button type="submit">Sign up</Button>
        ) :  clickButton ? (
          <ButtonActive type="submit">Sign up</ButtonActive>
        ) : (
          <ButtonActive type="submit">
            <Spiner />
          </ButtonActive>
        )}
      </Form>
    </FormProvider>
  );
};

export default RegistrationForm;
