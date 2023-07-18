import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;

  div {
    margin-bottom: 25px;

    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;

    span {
      color: var(--erro);
    }
  }
`;

export const InputContainer = styled.div`
  background: var(--botao-secundario-hover);
  color: var(--botao-secundario);

  height: 48px;
  width: 100%;
  max-width: 329.93px;

  display: flex;
  flex-direction: row;
  border-radius: 4px;

  input {
    background: transparent;
    color: var(--branco);

    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;

    width: 100%;
    max-width: 329.93px;

    padding: 0px 16.2426px;
    border-radius: 4px;
    border: 1.2182px solid;

    border-color: ${(props) => (props.border ? "#343B41" : "#F8F9FA")};

    ${(props) =>
      props.isErrored &&
      css`
        border-color: var(--erro);

        :focus {
          border-color: ${(props) => (props.border ? "#343B41" : "#F8F9FA")};
        }
      `}

    &::placeholder {
      color: var(--botao-secundario);
      font-weight: 400;
      font-size: 16.2426px;
      line-height: 26px;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:focus::placeholder {
      color: transparent;
    }
  }
`;
