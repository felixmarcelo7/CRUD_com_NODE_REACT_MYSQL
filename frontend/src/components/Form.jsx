import React from "react";
import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
`;

const Form = () => {
  return (
    <FormContainer>
      <div>
        <label htmlFor="nome">Nome</label>
        <input type="text" name="nome" id="nome" />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="tel">Telefone</label>
        <input type="tel" name="tel" id="tel" />
      </div>
      <div>
        <label htmlFor="dataNasc">Data de Nascimento</label>
        <input type="date" name="dataNasc" id="dataNasc" />
      </div>
      <input type="submit" value="SALVAR" />
    </FormContainer>
  );
};

export default Form;
