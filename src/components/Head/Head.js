import { Aprensentacao, BotaoContainer, Container, FacaParte, Logo } from "./style";
import img from "../../backgroun/logo.jpg";

const Head = () => {
  return (
    <Container>
      <Logo src={img} alt="logo" />
      <Aprensentacao>
        <h1>Expedições Galacticas</h1>
        <h2>Vai viajar!</h2>
        <p>
          Então embarque na melhor empresa de transporte de todas as galáxias.
        </p>
      </Aprensentacao>
      <FacaParte>
        <h2>Em construção!</h2>
        {/* <BotaoContainer>
          <button>Login</button>
          <button>Cadrastro</button>
        </BotaoContainer> */}
      </FacaParte>
    </Container>
  );
};

export default Head;
