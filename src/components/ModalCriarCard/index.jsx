import { Container, Content, Form, HeaderModal } from "./style"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import React, { useState } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import Button from "../Button"
import Select from "../Select"
import Input from "../Input"
import * as yup from "yup"


const ModalCriarCard = ({ setAbrirModal, addCard }) => {

    const [ token ] = useState(JSON.parse(localStorage.getItem("Kenzie Hub:token"))  || "") 

    const [ load, setLoad ] = useState(false)

    const schema = yup.object().shape({

        title: yup
            .string()
            .min(2, "Mínimo 2 caracteres")
            .required("Campo obrigatório"),
        status: yup
            .string()
            .required("Campo obrigatório")
    })
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = data => {

        setLoad(true)

        api.post("/users/techs", data, {
            
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {

            addCard(res.data)

            setAbrirModal(false)

            toast.success("Tecnologia criada com sucesso!")
        })
        .catch(_ => toast.error("Tecnologia já cadastrada!"))
        .finally(() => setLoad(false))
    }


    return (
        <Container>
            <Content>
                <Form onSubmit={ handleSubmit(onSubmitFunction) }>
                    <HeaderModal>
                        <h3>Cadastrar Tecnologia</h3>

                        <button onClick={ () => setAbrirModal(false) } >X</button>
                    </HeaderModal>

                    <div className='bodyModal'>
                        <Input
                        border={ false }
                        label="Nome" 
                        placeholder="Digite aqui a tecnologia" 
                        type="text" 
                        register={register} 
                        name="title"
                        error={ errors.title?.message }
                        />

                        <Select
                        border={ false }
                        label="Selecionar status"
                        register={register}
                        name="status"
                        error={ errors.status?.message }
                        >
                            <option>Iniciante</option>
                            <option>Intermediário</option>
                            <option>Avançado</option>
                        </Select>

                        <Button type="submit" botaoTam="login" disabled={ load } >{ load ? "Cadastrando..." : "Cadastrar Tecnologia" }</Button>
                    </div>
                </Form>
            </Content>
        </Container>
    )
}

export default ModalCriarCard
