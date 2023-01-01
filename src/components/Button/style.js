import styled, { css } from "styled-components"


export const Container = styled.button`

    border-radius: 4px;
    transition: .5s;

    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    color: var(--branco);
    border: 1.2182px solid;

    background: ${props => props.border ? "#FF577F" : "#212529"};
    border-color: ${props => props.border ? " #FF577F" : "#212529"};

    :hover {
        background: ${props => props.border ? "#59323F" : "#212529"};
        border-color: ${props => props.border ? "#59323F" : "#212529"};
    }

    :disabled {
        opacity: .5;
        cursor: not-allowed;
    }

    ${props =>  {

        switch(props.botaoTam) {

            case "cadastro":
                return css`
                    width: 100%;
                    max-width: 326px;
                    height: 48px;
                `
            case "login":
                return css`
                    width: 100%;
                    max-width: 324px;
                    height: 48px;
                `

            case "voltar":
                return css`
                    width: 67.49px;
                    height: 40.11px;
                    font-size: 12px;
                `
            
            case "sair":
                return css`
                    width: 55.49px;
                    height: 32px;
                    font-size: 12px;
                `

            case "mais":
                return css`
                    width: 32.49px;
                    height: 32px;
                `
            
            case "salvar alteração":
                return css`
                    width: 100%;
                    max-width: 204px;
                    height: 48px;

                    @media (max-width: 425px) {
                        max-width: unset;
                    }
                `
                
            case "excluir":
                return css`
                    width: 100%;
                    max-width: 98px;
                    height: 48px;

                    @media (max-width: 425px) {
                        max-width: unset;
                    }
                `

            default:
                return false
        }
    }}
`
