import { Container, InputContainer } from "./style"
import React from "react"


const Input = ({ border = true, label, register, name, error = "", ...rest }) => {
    return (
        <Container>
            <div>
                {label} {!!error && <span> - {error}</span>}
            </div>

            <InputContainer border={ border } isErrored={!!error}>
                <input {...register(name)} {...rest} />
            </InputContainer>
        </Container>
    )
}

export default Input
