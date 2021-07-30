import React from "react";
import styled from "styled-components";
const TermsCheck = styled.div`
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
  }

  label a {
    text-decoration: none;
    color: #0094ff;
  }
`;

const CheckTerms = () => {
  return (
    <TermsCheck>
      <input
        type="checkbox"
        id="checkTerms"
        name="checkTerms"
        value="checkTerms"
      />
      <label>
        Accept <a href="/#">terms</a> and <a href="/#">conditions</a>
      </label>
    </TermsCheck>
  );
};

export default CheckTerms;
