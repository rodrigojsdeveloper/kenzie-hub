import { Redirect, useHistory } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import { Container, Content } from "./style"
import Button from "../../components/Button"
import Input from "../../components/Input"
import { useForm } from "react-hook-form"
import Logo from "../../assets/Logo.png"
import React, { useState } from "react"
import { toast } from "react-toastify"
import api from "../../services/api"
import * as yup from "yup"


const Login = ({ autenticacao, setAutenticacao, setUser, setCards }) => {

    const history = useHistory()

    const [ load, setLoad ] = useState(false)

    const schema = yup.object().shape({
        
        email: yup
            .string()
            .email("Email inválido")
            .required("Campo obrigatório"),
        password: yup
            .string()
            .required("Campo obrigatório")
    })

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = data => {

        setLoad(true)

        api.post("/sessions", data)
            .then(res => {
                
                const { token, user } = res.data

                setUser(user)

                setCards(user.techs)

                setAutenticacao(true)

                localStorage.setItem("Kenzie Hub:token", JSON.stringify(token))

                localStorage.setItem("Kenzie Hub:user", JSON.stringify(user.id))                

            })
            .catch(() => toast.error("Erro ao entrar na conta, verifique seu email ou senha"))
            .finally(() => setLoad(false))
    }

    if(autenticacao) {
        return <Redirect to="/dashboard" />
    }

    return (
        <Container>

            <div className="divLogo">
                <img src={Logo} alt="Kenzie Hub" />
            </div>

            <Content>
                <form onSubmit={ handleSubmit(onSubmitFunction) }>
                    <div className='divTitulo'>
                        <h1>Login</h1>
                    </div>

                    <Input
                    type="email" 
                    name="email"
                    label="Email"                     
                    border={ false } 
                    register={register} 
                    error={ errors.email?.message }
                    placeholder="Digite aqui seu email"
                    />
                    <Input 
                    label="Senha" 
                    type="password" 
                    name="password"
                    border={ false }
                    register={register} 
                    error={ errors.password?.message }
                    placeholder="Digite aqui sua senha" 
                    />

                    <Button type="submit" botaoTam="login" disabled={ load } >{ load ? "Entrando..." : "Entrar" }</Button>

                    <div>
                        <p>Ainda não possui uma conta?</p>
                    </div>

                    <Button botaoTam="login" onClick={ () => history.push("/cadastro") } >Cadastre-se</Button>
                </form>
            </Content>
        </Container>
    )
}

export default Login
