import { Button, CarContainer, Title } from "./style";

const Car = ({ car, setCar }) => {
  const removePlanetCar = (planet) => {
    const newCar = car
      .map((item) =>
        item.name === planet.name
          ? { ...item, quantidade: item.quantidade - 1 }
          : item
      )
      .filter((item) => item.quantidade > 0);
    setCar(newCar);
  };

  const total = car.reduce((acumulador, planet) => {
    return (acumulador + planet.value * planet.quantidade);
  }, 0);

  return (
    <CarContainer>
      <Title>Carrinho</Title>
      {car.map((item) => {
        return (
          <div key={item.id}>
            <p>Nome: {item.name}</p>
            <p>Quantidade: {item.quantidade}</p>
            <Button onClick={() => removePlanetCar(item)}>Remover</Button>
          </div>
        );
      })}
      <p>Total: {total}</p>
    </CarContainer>
  );
};

export default Car;
