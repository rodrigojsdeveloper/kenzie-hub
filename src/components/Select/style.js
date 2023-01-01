import styled, { css } from "styled-components"


export const Container = styled.div`

    text-align: left;

    div {
        margin-bottom: 20px;

        font-weight: 400;
        font-size: 12.182px;
        line-height: 0px;

        span {
            color: var(--erro);
        }
    }
`

export const SelectContainer = styled.div`

    background: var(--botao-secundario-hover);
    border-radius: 4px;
    border: ${props => props.border ? "1.2182px solid var(--botao-secundario-hover)" : "1.2182px solid var(--branco)"};

    color: var(--botao-secundario);
    
    width: 329.93px;
    width: 100%;
    height: 48px;

    padding: 0 5px;

    display: flex;
    transition: 0.4s;

    ${props => props.isErrored && css`
        border-color: var(--erro);
    `}

    select {
        background: transparent;
        align-items: center;
        flex: 1;
        border: 0;
        color: var(--botao-secundario);
        font-size: 16.2426px;

        option {
            background: var(--botao-secundario-hover);
            color: var(--botao-secundario);
        }
    }
`
