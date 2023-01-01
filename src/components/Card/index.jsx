import { Container } from "./style"
import React from "react"


const Card = ({ card, setAbrirEditarModal, setTecnologiaAtual }) => {

    function handleClick() {
        
        setTecnologiaAtual(card)

        setAbrirEditarModal(true)
    }

    return (
        <Container onClick={ handleClick } >

            <h3>{ card.title }</h3>

            <p>{ card.status }</p>
            
        </Container>    
    )
}

export default Card
