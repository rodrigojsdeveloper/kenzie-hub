import { animacaoForm } from "../Login/style";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  animation: ${animacaoForm} 1s;

  margin: 40px 15px 50px 15px;

  .divLogo {
    display: flex;
    align-items: center;
    justify-content: space-between;

    max-width: 370px;
    width: 100%;

    padding: 40px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 370px;
  width: 100%;

  form {
    background: var(--background-form);

    max-width: 370px;
    width: 100%;

    padding: 42px 22px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    .divTitulo {
      text-align: center;
      margin-bottom: 20px;

      h1 {
        font-size: 18px;
        line-height: 28px;
        font-weight: 700;

        margin-bottom: 16px;
      }

      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;

        color: var(--botao-secundario);
      }
    }

    > div {
      margin-top: 16px;
    }
  }
`;
