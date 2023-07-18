import styled, { keyframes } from "styled-components";

export const animacaoForm = keyframes`

    from {
        opacity: 0;
        transform: translatey(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${animacaoForm} 1s;
  margin: 30px 15px 50px 15px;

  & > img {
    padding: 80px 0 40px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  max-width: 369px;
  width: 100%;
  height: 502px;

  form {
    background: var(--background-form);
    max-width: 370px;
    width: 100%;

    padding: 42px 22px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    div > p {
      text-align: center;
      color: var(--botao-secundario);
      font-size: 12px;
      padding: 20px 0;
    }

    button:last-child {
      background: var(--botao-secundario);
      border-color: var(--botao-secundario);
    }

    button:last-child:hover {
      background: var(--botao-secundario-hover);
      border-color: var(--botao-secundario-hover);
    }

    .divTitulo {
      text-align: center;

      h1 {
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;

        margin-bottom: 30px;
      }

      span {
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;

        color: var(--botao-secundario);
      }
    }

    & > div {
      & > p {
        margin-top: 16px;

        font-weight: 600;
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`;
