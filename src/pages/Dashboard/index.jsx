import ModalEditarCard from "../../components/ModalEditarCard";
import ModalCriarCard from "../../components/ModalCriarCard";
import { useHistory } from "react-router-dom";
import Button from "../../components/Button";
import Logo from "../../assets/Logo.png";
import Card from "../../components/Card";
import React, { useState } from "react";
import { Container } from "./style";

const Dashboard = ({ setUser, setAutenticacao, cards, setCards, user }) => {
  const history = useHistory();

  const [tecnologiaAtual, setTecnologiaAtual] = useState({});

  const [abrirModal, setAbrirModal] = useState(false);

  const [abrirEditarModal, setAbrirEditarModal] = useState(false);

  const addCard = (newCard) => setCards([...cards, newCard]);

  const handleClick = () => {
    setAutenticacao(false);

    setUser({});

    setCards([]);

    localStorage.clear();

    history.push("/");
  };

  return (
    <Container>
      {abrirEditarModal && (
        <ModalEditarCard
          setAbrirEditarModal={setAbrirEditarModal}
          tecnologiaAtual={tecnologiaAtual}
          setTecnologiaAtual={setTecnologiaAtual}
          setCards={setCards}
          cards={cards}
        />
      )}

      {abrirModal && (
        <ModalCriarCard setAbrirModal={setAbrirModal} addCard={addCard} />
      )}

      <header>
        <img src={Logo} alt="Kenzie Hub" />

        <Button botaoTam="sair" border={false} onClick={handleClick}>
          Sair
        </Button>
      </header>

      <div className="divNome">
        <h3>Olá, {user.name}</h3>

        <p>{user.course_module}</p>
      </div>

      <div className="divTecnologias">
        <h3>Tecnologias</h3>

        <Button
          botaoTam="mais"
          border={false}
          onClick={() => setAbrirModal(true)}
        >
          +
        </Button>
      </div>

      <div className="divContainerCard">
        <div className="divContentCard">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              setAbrirEditarModal={setAbrirEditarModal}
              setTecnologiaAtual={setTecnologiaAtual}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
