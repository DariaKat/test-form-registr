import React from "react";
import { useFormContext } from "react-hook-form";
import { LabelGender, Error, RadioInput, Container } from "./styles/style";

export const ChooseGender = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <Container>
      <RadioInput
          type="radio"
          id="male"
          name="gender"
          value="male"
          {...register("gender", {
            required: "You must select the gender",
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
    </div>
  );
};
