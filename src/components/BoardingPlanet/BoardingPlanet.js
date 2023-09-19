import { useNavigate } from "react-router-dom";
import planetas from "../../planetas.json";
import { goToHomePage } from "../../routes/coordinator";
import { Button, Container, Imagem, PlanetasContainer } from "./style";
import Head from "../Head/Head";
import Footer from "../Footer/Footer";

const BoardingPlanet = () => {
  const navigate = useNavigate();

  return (
    <>
      <Head />
      <h1>Escolha o Planeta de embarque.</h1>
      <input
        placeholder="Buscar por nome"
        type="text"
        />
      <Container>
        {planetas.map((planeta) => {
            return (
              <PlanetasContainer key={planeta.id}>
                <Imagem src={planeta.image} alt={planeta.name} />
                <p>Nome: {planeta.name}</p>
                <Button onClick={() => goToHomePage(navigate)}>Escolha</Button>
              </PlanetasContainer>
            );
          })}
        ;
      </Container>
      <Footer />
    </>
  );
};

export default BoardingPlanet;
