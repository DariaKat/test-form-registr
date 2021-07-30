import React from "react";
import styled from "styled-components";
const EmailInput = styled.div`
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
    padding-left: 14px;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
  }

  .icon-email {
    fill: #a2a2a2;
  }
`;

const InputEmail = () => {
  return (
    <EmailInput>
      <i className="icon-email">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16"
          viewBox="0 0 20 16"
        >
          <defs></defs>
          <path
            d="M19,4H5A3,3,0,0,0,2,7V17a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7a3,3,0,0,0-3-3Zm-.67,2L12,10.75,5.67,6ZM19,18H5a1,1,0,0,1-1-1V7.25l7.4,5.55a1,1,0,0,0,1.2,0L20,7.25V17A1,1,0,0,1,19,18Z"
            transform="translate(-2 -4)"
          />
        </svg>
      </i>
      <input type="email" placeholder="Email" />
    </EmailInput>
  );
};

export default InputEmail;
