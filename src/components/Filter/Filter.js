import { Container, InputContainer, Title } from "./style";

const Filter = ({ setValueMin, setValueMax, setSearchName }) => {
  
  return (
    <Container>
      <Title>Filtro</Title>
      <InputContainer>
        <input placeholder="Valor mínimo" type="number" onChange={(e) => setValueMin(e.target.value)} />
        <input placeholder="Valor máximo" type="number" onChange={(e) => setValueMax(e.target.value)} />
        <input placeholder="Buscar por nome" type="text" onChange={(e) => setSearchName(e.target.value)} />
      </InputContainer>
    </Container>
  );
};

export default Filter;
