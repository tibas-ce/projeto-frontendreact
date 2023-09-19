import planetas from "../../planetas.json";
import {
  PlanetasContainer,
  Imagem,
  Title,
  Container,
  Cabecalho,  
  Button,
  PlanetSection
} from "./style";

const CardPlanet = ({
  car,
  setCar,
  order,
  setOrder,
  valueMax,
  valueMin,
  searchName,
}) => {
  const addPlanetCar = (planet) => {
    const planetExistCar = car.find((item) => item.name === planet.name);
    if (planetExistCar) {
      const newCar = car.map((item) =>
        planetExistCar.name === item.name
          ? { ...item, quantidade: item.quantidade + 1 }
          : item
      );
      setCar(newCar);
    } else {
      setCar([...car, { ...planet, quantidade: 1 }]);
    }
  };

  // console.log(order)

  return (
    <Container>
      <Cabecalho>
        <Title>Destinos</Title>
        <br/>
        <select value={order} onChange={(e) => setOrder(e.target.value)}>
          <option value="crescente">Crescente</option>
          <option value="decrescente">Decrescente</option>
        </select>
      </Cabecalho>
      <PlanetSection>
      {planetas
        .sort((planet1, planet2) => {
          return order === "crescente"
            ? planet1.name.localeCompare(planet2.name)
            : planet2.name.localeCompare(planet1.name);
        })
        .filter((planet) => {
          return valueMin ? planet.value >= valueMin : planet;
        })
        .filter((planet) => {
          return valueMax ? planet.value <= valueMax : planet;
        })
        .filter((planet) => {
          return planet.name.toLowerCase().includes(searchName.toLowerCase());
        })
        .map((planeta) => {
          return (
            <PlanetasContainer key={planeta.id}>
              <Imagem src={planeta.image} alt={planeta.name} />
              <p>Nome: {planeta.name}</p>
              <p>Valor: {planeta.value}</p>
              <Button onClick={() => addPlanetCar(planeta)}>Comprar</Button>
            </PlanetasContainer>
          );
        })}
        </PlanetSection>
    </Container>
  );
};

export default CardPlanet;
