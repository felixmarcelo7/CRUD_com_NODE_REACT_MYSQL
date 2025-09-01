import React, { useRef } from "react";
import styled from "styled-components";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
  text-align: left;
  margin-top: 25px;
`;

const Form = ({ onEdit }) => {
  const ref = useRef();

  return (
    <FormContainer>
      <InputArea>
        <label htmlFor="nome">Nome</label>
        <Input type="text" name="nome" id="nome" />
      </InputArea>
      <InputArea>
        <label htmlFor="email">E-mail</label>
        <Input type="email" name="email" id="email" />
      </InputArea>
      <InputArea>
        <label htmlFor="tel">Telefone</label>
        <Input type="tel" name="tel" id="tel" />
      </InputArea>
      <InputArea>
        <label htmlFor="dataNasc">Data de Nascimento</label>
        <Input type="date" name="dataNasc" id="dataNasc" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
