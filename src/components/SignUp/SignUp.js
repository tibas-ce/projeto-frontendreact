import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage, goToLogin } from "../../routes/coordinator";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const mudarName = (e) => {
    setName(e.target.value);
  };

  const mudarEmail = (e) => {
    setEmail(e.target.value);
  };

  const mudarPassword = (e) => {
    setPassword(e.target.value);
  };

  const send = () => {
    const form = {
        id: Date.now(),
        name: name,
        email: email,
        password: password
    }
    setUser(form)

    goToHomePage(navigate)
  }

  const navigate = useNavigate();

  return (
    <>
      <div>
        <h1>Cadastro</h1>
        <section>
          <label>
            Nome: <input type="text" value={name} onChange={mudarName} />
          </label>
          <label>
            Email: <input type="email" value={email} onChange={mudarEmail} />
          </label>
          <label>
            Password:{" "}
            <input type="password" value={password} onChange={mudarPassword} />
          </label>
          <button onClick={send}>Enviar dados</button>
        </section>
        <section>
          <button onClick={() => goToLogin(navigate)}>
            Já tem cadastro, clique aqui!
          </button>
        </section>
      </div>
    </>
  );
};

export default SignUp;
