import React from "react";
import styled from "styled-components";
const ChooseCountry = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 309px;
  background: #f5f8fa;
  border-radius: 8px;
  padding: 17px;
  margin: 5px 0 16px 0;

  select {
    outline: none;
    border: none;
    background: #f5f8fa;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    width: 310px;
    padding: 0;
  }
`;

const SelectCountry = () => {
  return (
    <ChooseCountry>
      <select>
        <option disabled>Select country</option>
        <option value="Latvia">Latvia</option>
        <option value="Lebanon">Lebanon</option>
        <option value="Lesotho">Lesotho</option>
        <option value="Liberia">Liberia</option>
        <option value="Libya">Libya</option>
      </select>
    </ChooseCountry>
  );
};

export default SelectCountry;
