import React from "react";
import { useFormContext } from "react-hook-form";
import { BasicInput, Error,BasicContainer } from "./styles/style";

  
export const Name = () => {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div>
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
            </div>
    );
  };