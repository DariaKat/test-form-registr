import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  background: #ffffff;
  border-radius: 8px;
`;

const HeadingForm = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 28px;
  margin: 32px 0 21px 0;
`;

const Button = styled.button`
  width: 343px;
  height: 62px;
  background: #a2a2a2;
  border-radius: 31px;
  outline: none;
  border: none;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  margin-top: 23px;
  margin-bottom: 53px;
`;

const ButtonActive = styled(Button)`
  background: #0094ff;
`;

const BasicContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 309px;
  background: #f5f8fa;
  border-radius: 8px;
  padding: 17px;
  margin: 16px 0 5px 0;
`;

const BasicInput = styled.input`
  outline: none;
  border: none;
  background: #f5f8fa;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  padding: 0;
`;

const Input = styled(BasicInput)`
  padding-left: 14px;
`;

const Icon = styled.i`
  fill: #a2a2a2;
`;

const Select = styled.div`
  outline: none;
  border: none;
  background: #f5f8fa;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  width: 342px;
  position: relative;
  display: block;
  margin: 16px auto;
  border-radius: 8px;
  .select-box__current {
    position: relative;
    cursor: pointer;
    outline: none;
    padding: 18px 21px;
  }
  .select-box__current:nth-last-child {
    color: ;
  }

  .select-box__current:focus + .select-box__list {
    opacity: 1;
    animation-name: none;
  }
  .select-box__current:focus + .select-box__list .select-box__option {
    cursor: pointer;
  }
  .select-box__current:focus .select-box__icon {
    transform: translateY(-50%) rotate(180deg);
  }

  .select-box__icon {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    width: 11px;
    color: #000000;
    opacity: 0.3;
    transition: 0.2s ease;
  }

  .select-box__value {
    display: flex;
  }

  .select-box__value:nth-last-child(2) {
    color: #a2a2a2;
  }
  .Select {
    display: none;
  }
  .select-box__input {
    display: none;
  }
  .select-box__input:checked + .select-box__input-text {
    display: block;
  }
  .select-box__input-text {
    display: none;
    width: 343px;
    margin: 0;
    padding-left: 4px;
    background: #f5f8fa;
  }
  .select-box__list {
    position: absolute;
    width: 100%;
    padding: 5px 0;
    background: #ffffff;
    list-style: none;
    margin-top: 10px;
    border-radius: 8px;
    opacity: 0;
    animation-name: HideList;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: step-start;
    box-shadow: 0px 3px 8px #00000026;
  }
  .select-box__option {
    display: block;
    padding: 10px 19px;
    background-color: #fff;
    margin-top: 2px;
  }
  .select-box__option:hover,
  .select-box__option:focus {
    color: #222222;
    background-color: #f5f8fa;
  }

  @keyframes HideList {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
`;

const Container = styled(BasicContainer)`
  background: #ffffff;
  width: 342px;
  padding: 14px 0;
  margin: 0;
`;

const Label = styled.label`
  padding-left: 8px;
`;

const LabelGender = styled(Label)`
  padding-left: 8px;
  padding-right: 25px;
`;

const RadioInput = styled.input``;

const Link = styled.a`
  text-decoration: none;
  color: #0094ff;
`;

const Error = styled.p`
  width: 306px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #e82828;
  text-align: left;
`;

const Spiner = styled.div`
  width: 15px;
  height: 15px;
  border: 1px solid transparent;
  border-left: 1px solid #d6d815;
  border-right: 1px solid #d6d815;
  border-bottom: 1px solid #d6d815;
  border-radius: 50px;
  animation: spin 1s linear infinite;
  border-width: 4px;
  border-color: #ffffff;
  border-top-color: transparent;
  margin: 0 auto;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export {
  Button,
  ButtonActive,
  Form,
  HeadingForm,
  BasicInput,
  BasicContainer,
  Input,
  Icon,
  Select,
  Label,
  Link,
  LabelGender,
  Container,
  Error,
  RadioInput,
  Spiner,
};
