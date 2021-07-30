import React from "react";
import styled from "styled-components";
const GenderRadio = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background: #ffffff;
  width: 342px;
  padding: 14px 0;
  margin: 0;

  label {
    padding-left: 8px;
    padding-right: 25px;
  }
`;

const ChooseGender = () => {
  return (
    <GenderRadio>
      <input type="radio" id="male" name="gender" value="male" />
      <label>Male</label>

      <input type="radio" id="female" name="gender" value="female" />
      <label>Female</label>
    </GenderRadio>
  );
};

export default ChooseGender;
