import React, { useState } from "react";
import styled from "styled-components";
const NameInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 309px;
  background: #f5f8fa;
  border-radius: 8px;
  padding: 17px;
  margin: 5px 0 16px 0;

  input {
    outline: none;
    border: none;
    background: #f5f8fa;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding: 0;
  }
`;

const InputName = () => {
  const [name, setName] = useState('');

  const onChangeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  return (
    <NameInput>
      <input type="text" onChange={onChangeName} placeholder="Enter your name" />
    </NameInput>
  );
};

export default InputName;
