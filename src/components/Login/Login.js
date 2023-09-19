import img from "../../backgroun/logo.jpg"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToSignUp } from "../../routes/coordinator";
import { Container, FormContainer, Logo, SignUp, Title } from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const mudarEmail = (e) => {
    setEmail(e.target.value);
  };

  const mudarPassword = (e) => {
    setPassword(e.target.value);
  };

  const send = () => {
    const form = {
      email: email,
      password: password,
    };
    setUser(form);

    goToHomePage(navigate)
  };

  const navigate = useNavigate();

  return (
    <>
      <Title>Expedições Galacticas</Title>
      <Container>
        {/* <Logo src={img} alt="logo" /> */}
        <FormContainer>
          <h1>Login</h1>
          <label>
            Email: <input type="email" value={email} onChange={mudarEmail} />
          </label>
          <label>
            Password:{" "}
            <input type="password" value={password} onChange={mudarPassword} />
          </label>
          <button onClick={send}>Entrar</button>
        </FormContainer>
        <SignUp>
          <p>Ainda não e cadastrado!</p>
          <button onClick={() => goToSignUp(navigate)}>
            Faça seu cadastro!
          </button>
        </SignUp>
      </Container>
    </>
  );
};

export default Login;
