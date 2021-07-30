import React from 'react';
import styled from "styled-components";
import "./App.css";
import RegistrationForm from './components/form';
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #102250;
`;

const App = () => {
  return (
   <Container>
      <RegistrationForm />
   </Container>
  );
}

export default App;
