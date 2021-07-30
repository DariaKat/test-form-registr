import React from "react";
import styled from "styled-components";
const PasswordInput = styled.div`
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

  .icon-password {
    fill: #a2a2a2;
  }
`;

const InputPassword = () => {
  return (
    <PasswordInput>
      <i className="icon-password">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="19.89"
          viewBox="0 0 16 19.89"
        >
          <defs></defs>
          <path
            d="M17,8H16V6.11a4,4,0,0,0-8,0V8H7a3,3,0,0,0-3,3v8a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V11A3,3,0,0,0,17,8ZM10,6.11a2,2,0,1,1,4,0V8H10ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H17a1,1,0,0,1,1,1Z"
            transform="translate(-4 -2.11)"
          />
          <path
            d="M12,12a3,3,0,1,0,3,3A3,3,0,0,0,12,12Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,12,16Z"
            transform="translate(-4 -2.11)"
          />
        </svg>
      </i>
      <input type="password" placeholder="Password" />
    </PasswordInput>
  );
};

export default InputPassword;
