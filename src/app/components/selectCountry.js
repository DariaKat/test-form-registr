import React from "react";

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
                defaultChecked
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
  
export {listCountry, inputCountry};