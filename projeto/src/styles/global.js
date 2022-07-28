import { createGlobalStyle } from "styled-components"


export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
    }

    :root {
        --botao-principal: #FF577F;
        --botao-secundario: #868E96;
        --botao-principal-hover: #59323F;
        --botao-secundario-hover: #343B41;
        --background-form: #212529;
        --fundo: #121214;
        --branco: #F8F9FA;
        --erro: #c53030;
        --fundo-modal: rgba(0, 0, 0, 0.4);
    }

    body {
        background: var(--fundo);
        color: var(--branco);
    }

    body, input, button {
        font-size: 1rem;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`
