import styled, { css } from "styled-components"


export const Container = styled.div`

    text-align: left;

    div {
        margin-bottom: 20px;

        font-weight: 400;
        font-size: 12.182px;

        span {
            color: var(--erro);
        }
    }
`

export const InputContainer = styled.div`

    background: var(--botao-secundario-hover);
    color: var(--botao-secundario);
    
    width: 329.93px;
    width: 100%;
    height: 48px;

    display: flex;
    transition: 0.4s;

    input {
        background: transparent;
        align-items: center;
        flex: 1;
        color: var(--branco);

        padding: 0 10px;
        border-radius: 4px;
        border: 1.2182px solid;

        border-color: ${props => props.border ? "#343B41" : "#F8F9FA"};

        ${props => props.isErrored && css`
        border-color: var(--erro);

        :focus {
            border-color: ${props => props.border ? "#343B41" : "#F8F9FA"};
        }
        `}

        &::placeholder {
            color: var(--botao-secundario);
            font-size: 16.2426px;
        }

        &:disabled {
            opacity: .5;
            cursor: not-allowed;
        }
    }
`
