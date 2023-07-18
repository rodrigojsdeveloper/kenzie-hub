import { Container, Content, Form, HeaderModal } from "../ModalCriarCard/style";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";
import { DivBotoes } from "./style";
import Button from "../Button";
import Select from "../Select";
import Input from "../Input";

const ModalEditarCard = ({
  setTecnologiaAtual,
  setAbrirEditarModal,
  tecnologiaAtual,
  setCards,
  cards,
}) => {
  const [token] = useState(
    JSON.parse(localStorage.getItem("Kenzie Hub:token")) || ""
  );

  const [load, setLoad] = useState(false);

  const [loadExcluir, setLoadExcluir] = useState(false);

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setLoad(true);

    const { status } = data;

    api
      .put(
        `/users/techs/${tecnologiaAtual.id}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((_) => {
        setAbrirEditarModal(false);

        toast.success("Tecnologia alterada com sucesso!");

        const novaTecnologia = { ...tecnologiaAtual, status };

        const newList = cards.filter((card) => card.id !== tecnologiaAtual.id);

        setTecnologiaAtual({});

        setCards([...newList, novaTecnologia]);
      })
      .catch(() => toast.error("Não foi possível alterar a tecnologia"))
      .finally(() => setLoad(false));
  };

  const handleClick = () => {
    setLoadExcluir(true);

    api
      .delete(`/users/techs/${tecnologiaAtual.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        setAbrirEditarModal(false);

        toast.success("Tecnologia excluída com sucesso!");

        const newList = cards.filter((card) => card.id !== tecnologiaAtual.id);

        setCards(newList);
      })
      .catch(() => toast.error("Não foi possível excluir a tecnologia"))
      .finally(() => setLoadExcluir(false));
  };

  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <HeaderModal>
            <h3>Tecnologia Detalhes</h3>

            <button onClick={() => setAbrirEditarModal(false)}>X</button>
          </HeaderModal>

          <div className="bodyModal">
            <Input
              border={false}
              label="Nome"
              placeholder="Digite aqui a tecnologia"
              type="text"
              value={tecnologiaAtual.title}
              disabled="disabled"
              register={register}
              name="title"
            />

            <Select
              border={false}
              label="Selecionar status"
              register={register}
              name="status"
            >
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </Select>

            <DivBotoes>
              <Button type="submit" botaoTam="salvar alteração" disabled={load}>
                {load ? "Alterando..." : "Salvar alterações"}
              </Button>
              <Button
                onClick={handleClick}
                className="botaoExcluir"
                botaoTam="excluir"
                disabled={loadExcluir}
              >
                {loadExcluir ? "Excluindo..." : "Excluir"}
              </Button>
            </DivBotoes>
          </div>
        </Form>
      </Content>
    </Container>
  );
};

export default ModalEditarCard;
