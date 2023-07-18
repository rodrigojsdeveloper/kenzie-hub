import { animacaoForm } from "../../pages/Login/style";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background: var(--fundo-modal);
  backdrop-filter: blur(2px);

  display: flex;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;

  margin: 0 auto;

  width: 100%;
  max-width: 369px;

  @media screen and (max-width: 390px) {
    margin: 10px;
  }

  animation: ${animacaoForm} 0.4s forwards;
`;

export const Form = styled.form`
  background: var(--background-form);

  width: 100%;
  max-width: 369px;

  border-radius: 4px;

  .bodyModal {
    padding: 20px;
  }
`;

export const HeaderModal = styled.div`
  background: var(--botao-secundario-hover);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;

  border-radius: 4px 4px 0 0;

  button {
    background: transparent;
    border: none;
    color: var(--botao-secundario);
  }

  h3 {
    font-size: 14px;
  }
`;
