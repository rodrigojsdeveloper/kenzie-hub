import styled from "styled-components"


export const Container = styled.div`

    header {
        border-bottom: 1px solid var(--botao-secundario-hover);
        height: 72px;

        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .divNome {
        height: 118px;
        border-bottom: 1px solid var(--botao-secundario-hover);

        display: flex;
        justify-content: space-around;
        align-items: center;

        h3 {
            font-size: 18px;
        }

        p {
            font-size: 12px;
            color: var(--botao-secundario);
        }
    }

    .divContainerCard {
        display: flex;
        justify-content: center;    
    }

    .divTecnologias {
        display: flex;
        justify-content: space-around;
        align-items: center;

        padding: 20px 0;
    }

    .divContentCard {

        width: 100%;
        max-width: 780px;
        height: 416px;

        border-radius: 4px;

        background: var(--background-form);

        padding: 20px;
        overflow-y: auto;
        margin: 10px 10px 30px 10px;
    }

    .divContentCard::-webkit-scrollbar {
        display: none;
    }
`
