import React, { useState } from "react";
import {
  Button,
  Form,
  HeadingForm,
  BasicInput,
  BasicContainer,
  Icon,
  Input,
  Container,
  Label,
  Link,
  LabelGender,
  Error,
  RadioInput,
  Select,
  Spiner,
  ButtonActive,
} from "./styles/style";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const [clickButton, setclickButton] = useState(true);

  const onSubmit = (data) => {
    setclickButton(false);
    console.log(data);
    setTimeout(() => {
      setclickButton(true);
      reset();
    }, 10000);
  };

  const options = ["Latvia", "Lebanon", "Lesotho", "Liberia", "Libya"];
  const inputCountry = options.map((item, i) => {
    return (
      <div>
      <div className="select-box__value" key={i.toString()}>
        <input
          className="select-box__input" 
          type="radio"
          id={i}
          value={item}
          name="country"
          defaultChecked="checked"
          {...register("selectCountry", {
            required: "You must select your country",
          })}
        />
        <p className="select-box__input-text">{item}</p>
      </div>
        
        </div>
    );
  });
  const listCountry = options.map((item, i) => {
    return (
      <li className={item} key={i.toString()}>
        <label className="select-box__option" htmlFor={i} aria-hidden="true">
          {item}
        </label>
      </li>
    );
  });

  const emailValid =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  const userName = watch("userName");
  const email = watch("email");
  const password = watch("password");
  const select = watch("selectCountry");
  const gender = watch("gender", false);
  const checked = watch("checkTerms", false);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <HeadingForm>Create a new account</HeadingForm>
      <BasicContainer>
        <BasicInput
          id="userName"
          type="text"
          placeholder="Enter your name"
          {...register("userName", {
            required: "This input is required",
            pattern: {
              value: /^[a-zA-Z]+$/,
              message: "Please enter a valid name",
            },
            minLength: {
              value: 2,
              message: "Please enter more than 2 characters",
            },
          })}
        />
      </BasicContainer>
      <Error>{errors.userName?.message}</Error>
      <BasicContainer>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 20 16"
          >
            <path
              d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,1.2,0L20,7.25V17A1,1,0,0,1,19,18Z"
              transform="translate(-2 -4)"
            />
          </svg>
        </Icon>
        <Input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: "This input is required",
            pattern: {
              value: emailValid,
              message: "Please enter a valid email address",
            },
          })}
        />
      </BasicContainer>
      <Error>{errors.email?.message}</Error>
      <BasicContainer>
        <Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="19.89"
            viewBox="0 0 16 19.89"
          >
            <path
              d="M17,8H16V6.11a4,4,0,0,0-8,0V8H7a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V11A3,3,0,0,0,17,8ZM10,6.11a2,2,0,1,1,4,0V8H10ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"
              transform="translate(-4 -2.11)"
            />
            <path
              d="M12,12a3,3,0,1,0,3,3A3,3,0,0,0,12,12Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,16Z"
              transform="translate(-4 -2.11)"
            />
          </svg>
        </Icon>
        <Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "This input is required",
            minLength: {
              value: 6,
              message: "Password must contain at least 6 symbols",
            },
          })}
        />
      </BasicContainer>
      <Error>{errors.password?.message}</Error>

      <Select>
        <div className="select-box__current" tabIndex="1"  >
          {inputCountry}
       
          <img
            className="select-box__icon"
            src="https://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
            aria-hidden="true"
          />
          <Error>{errors.selectCountry?.message}</Error>
        </div>
        <ul className="select-box__list">{listCountry}</ul>
      </Select>
      

      <Container>
        <RadioInput
          type="radio"
          id="male"
          name="gender"
          value="male"
          {...register("gender", {
            required: "This input is required",
          })}
        />
        <LabelGender>Male</LabelGender>

        <RadioInput
          type="radio"
          id="female"
          name="gender"
          value="female"
          {...register("gender", {
            required: "You must select the gender",
          })}
        />
        <LabelGender>Female</LabelGender>
      </Container>
      <Error>{errors.gender?.message}</Error>
      <Container>
        <input
          type="checkbox"
          id="checkTerms"
          name="checkTerms"
          value="checkTerms"
          {...register("checkTerms", {
            required: "You must assept the policies",
          })}
        />
        <Label>
          Accept <Link href="/#">terms</Link> and{" "}
          <Link href="/#">conditions</Link>
        </Label>
      </Container>
      <Error>{errors.checkTerms?.message}</Error>

      {checked &&
      gender &&
      userName &&
      email &&
      password &&
      select &&
      errors.password?.message === undefined &&
      errors.email?.message === undefined &&
      errors.userName?.message === undefined ? (
        clickButton ? (
          <ButtonActive type="submit">Sign up</ButtonActive>
        ) : (
          <ButtonActive type="submit">
            <Spiner />
          </ButtonActive>
        )
      ) : (
        <Button type="submit">Sign up</Button>
      )}
    </Form>
  );
};

export default RegistrationForm;
