import React from "react";
import { useFormContext } from "react-hook-form";
import { Select, Error } from "./styles/style";

export const SelectCountry = (props) => {
  const { register, watch, formState: { errors } } = useFormContext();

  const country = watch('country', false);
  console.log(country);

  const options = ["Latvia", "Lebanon", "Lesotho", "Liberia", "Libya"];
  const inputCountry = options.map((item, i) => {
    return (
      <div className="select-box__value" key={i.toString()}>
        <input
          className="select-box__input"
          type="radio"
          id={i}
          value={item}
          name="country"
          // defaultChecked
          {...register("country", {
            required: "You must select your country",
          })}
        />
        <p className="select-box__input-text">{item}</p>
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

  return (
    <div>
      <Select>
        <div className="select-box__current" tabIndex="1">
          { (!country) ? <p className="select-input"> Select country </p>: <p></p>}
          {inputCountry}
          <img
            className="select-box__icon"
            src="https://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
            aria-hidden="true"
          />
        </div>
        <ul className="select-box__list">{listCountry}</ul>
      </Select>
      <Error>{errors.country?.message}</Error>
    </div>
  );
};
