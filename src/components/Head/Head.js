import { Aprensentacao, Aviso, Botao, Container, FacaParte, Logo } from "./style";
import img from "../../backgroun/logo.jpg";
import { goToLogin, goToSignUp } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Head = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={img} alt="logo" />
      <Aprensentacao>
        <h1>Expedições Galacticas</h1>
        <Aviso>Atenção projeto em desenvolvimento, algumas funcionalidades podem não funcionar corretamente é os estilos não são os finais!</Aviso>
        <p>
          Então embarque na melhor empresa de transporte de todas as galáxias.
        </p>
      </Aprensentacao>
      <FacaParte>
        <h2>Faça o login ou cadastre-se!</h2>
        <Botao>
          <button onClick={() => goToLogin(navigate)} >Login</button>
          <button onClick={() => goToSignUp(navigate)} >Cadrastro</button>
        </Botao>
      </FacaParte>
    </Container>
  );
};

export default Head;
