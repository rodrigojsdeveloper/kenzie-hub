import styled, { keyframes } from "styled-components"


export const animacaoForm = keyframes`

    from {
        opacity: 0;
        transform: translatey(-50px);
    }

    to {
        opacity: 1;
        transform: translateX(0px);
    }
`

export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    animation: ${animacaoForm} 1s;

    margin: 0 10px 30px 10px;


    .divLogo {
        display: flex;
        justify-content: center;

        max-width: 370px;
        width: 100%;

        padding: 50px 0 40px 0;

        align-items: center;

        img {
            height: 21.21px;
            width: 144.06px;
        }
    }
`

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
                font-size: 18px;
                line-height: 28px;
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
`
