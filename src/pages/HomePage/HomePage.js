import { useEffect, useState } from "react";
import { AppContainer } from "./style";
import Head from "../../components/Head/Head";
import Filter from "../../components/Filter/Filter";
import CardPlanet from "../../components/CardPlanet/CardPlanet";
import Car from "../../components/Car/Car";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  const [car, setCar] = useState([]);
  const [order, setOrder] = useState("crescente");
  const [valueMax, setValueMax] = useState(0);
  const [valueMin, setValueMin] = useState(0);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    if (car.length > 0) {
      localStorage.setItem("carrinho", JSON.stringify(car));
    }
  }, [car]);
  useEffect(() => {
    const carLocalStorage = localStorage.getItem("carrinho");
    if (carLocalStorage) {
      setCar(JSON.parse(carLocalStorage));
    }
  }, []);

  return (
    <>
      <Head />
      <AppContainer>
        <Filter
          setValueMax={setValueMax}
          setValueMin={setValueMin}
          setSearchName={setSearchName}
        />
        <CardPlanet
          car={car}
          setCar={setCar}
          order={order}
          setOrder={setOrder}
          valueMax={valueMax}
          valueMin={valueMin}
          searchName={searchName}
        />
        <Car car={car} setCar={setCar} />
      </AppContainer>
      <Footer />
    </>
  );
};

export default HomePage;
