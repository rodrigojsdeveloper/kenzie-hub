import styled from "styled-components"


export const Container = styled.div`

    width: 100%;
    max-width: 732px;
    height: 49px;

    background: var(--fundo);

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;

    border-radius: 4px;

    margin-bottom: 15px;
    cursor: pointer;

    :hover {
        background: var(--botao-secundario-hover);
    }
    
    h3 {
            font-size: 14.21px;
    }

    p {
        font-size: 12.182px;
        color: var(--botao-secundario);
    }
`
