import { BrowserRouter } from "react-router-dom"
import GlobalStyle from "./styles/global"
import ReactDOM from "react-dom/client"
import React from "react"
import App from "./App"


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
