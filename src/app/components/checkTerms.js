import React from "react";
import { useFormContext } from "react-hook-form";
import { Label, Error, Link, Container } from "./styles/style";

  
export const CheckTerms = () => {
    const { register, formState: { errors }} = useFormContext();
      
    return (
        <div>
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
            </div>
    );
  };