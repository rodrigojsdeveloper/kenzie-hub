import styled from "styled-components"


export const DivBotoes = styled.div`

    display: flex;
    justify-content: space-around;

    gap: 10px;

    .botaoExcluir {
        background: var(--botao-secundario);
        border-color: var(--botao-secundario);
    }

    .botaoExcluir:hover {
        background: var(--botao-secundario-hover);
        border-color: var(--botao-secundario-hover);
    }

    @media screen and (max-width: 425px) {
        flex-direction: column;

        .botaoExcluir {
            width: 100%;
            display: inline-flex;

            align-items: center;
            justify-content: center;
        }
    }
`
