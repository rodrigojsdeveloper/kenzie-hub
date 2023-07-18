import { useHistory, Redirect } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Content } from "./style";
import Select from "../../components/Select";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.svg";
import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import * as yup from "yup";

const Cadastro = ({ autenticacao }) => {
  const history = useHistory();

  const [load, setLoad] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Mínimo 2 caracteres")
      .max(30, "Máximo 30 caracteres")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "A senha deve conter letras maiúsculas e minúsculas, números e caracteres especiais!"
      )
      .required("Campo obrigatório"),
    confPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({
    name,
    email,
    password,
    bio,
    contact,
    course_module,
  }) => {
    const user = { name, email, password, bio, contact, course_module };

    setLoad(true);

    api
      .post("/users", user)
      .then(() => {
        toast.success("Conta criada com sucesso!");

        return history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          toast.error("Email já existente!");
        } else {
          toast.error("Ops! Algo deu errado");
        }
      })
      .finally(() => setLoad(false));
  };

  if (autenticacao) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <div className="divLogo">
        <img src={Logo} alt="Kenzie Hub" />

        <Button
          border={false}
          botaoTam="voltar"
          onClick={() => history.push("/")}
        >
          Voltar
        </Button>
      </div>

      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <div className="divTitulo">
            <h1>Crie sua conta</h1>

            <span>Rapido e grátis, vamos nessa</span>
          </div>

          <Input
            label="Nome"
            placeholder="Digite aqui seu nome"
            type="text"
            register={register}
            name={"name"}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            placeholder="Digite aqui seu email"
            type="email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            placeholder="Digite aqui sua senha"
            type="password"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Input
            type="password"
            name="confPassword"
            register={register}
            label="Confirmar Senha"
            error={errors.confPassword?.message}
            placeholder="Digite novamente sua senha"
          />
          <Input
            name="bio"
            type="text"
            label="Bio"
            register={register}
            placeholder="Fale sobre você"
            error={errors.bio?.message}
          />
          <Input
            type="text"
            name="contact"
            label="Contato"
            register={register}
            placeholder="Opção de contato"
            error={errors.contact?.message}
          />
          <Select
            register={register}
            name="course_module"
            label="Selecionar módulo"
            error={errors.course_module?.message}
          >
            <option>Primeiro módulo</option>
            <option>Segundo módulo</option>
            <option>Terceiro módulo</option>
            <option>Quarto módulo</option>
          </Select>

          <Button type="submit" botaoTam="cadastro" disabled={load}>
            {load ? "Cadastrando..." : "Cadastrar"}
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Cadastro;
