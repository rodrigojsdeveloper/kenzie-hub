import { Switch, Route, useHistory } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Dashboard from "../pages/Dashboard"
import NotFound from "../pages/NotFound"
import Cadastro from "../pages/Cadastro"
import Login from "../pages/Login"
import api from "../services/api"


const Routes = () => {

    const history = useHistory()

    const [ autenticacao, setAutenticacao ] = useState(false)

    const [ user, setUser ] = useState({})

    const [ cards, setCards ] = useState([])

    useEffect(() => {
        
        const token = JSON.parse(localStorage.getItem("Kenzie Hub:token"))

        if(token) {

            const id = JSON.parse(localStorage.getItem("Kenzie Hub:user"))

            api.get(`/users/${id}`)
                .then(res => {
                    
                    const user = res.data

                    setUser(user)

                    setCards(user.techs)

                    setAutenticacao(true)

                    history.push("/dashboard")
                })
                .catch(() => history.push("/"))
        }
        
    }, [])

    return (
        <Switch>
            <Route path="/cadastro">
                <Cadastro autenticacao={ autenticacao } />
            </Route>

            <Route path="/dashboard">
                <Dashboard 
                user={ user }
                cards={ cards } 
                setUser={ setUser } 
                setCards={ setCards } 
                setAutenticacao={ setAutenticacao }
                />
            </Route>

            <Route exact path="/">
                <Login 
                setUser={ setUser } 
                setCards={ setCards }
                autenticacao={ autenticacao } 
                setAutenticacao={ setAutenticacao }
                />
            </Route>

            <Route component={ NotFound } />
        </Switch>
    )
}

export default Routes
