import styled from "styled-components";

export const Container = styled.div`
  /* background-image: "../imagens/background.jpg"; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  margin-top: 10px;
`;

export const Cabecalho = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Title = styled.h1`
    font-size: 40px;
    /* Definir degradê como fundo */
    background-image: linear-gradient( rgb(23, 28, 47), rgb(229, 229, 229));
    /* Apagar fundo */
    background-clip: text;
    -webkit-background-clip: text;
    /* Apagar o texto, deixando apenas o fundo atrás dele */
    -webkit-text-fill-color: transparent;
    /* Cor que constraste com o degradê, caso o navegador não suporte 'background-clip: text' */
    color: transparent;
`;

export const PlanetSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 40px;
`;

export const PlanetasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Imagem = styled.img`
  width: 240px;
  height: 240px;
`;

export const Button = styled.button`
  &:hover {
    cursor: pointer;
    color: lightblue;
  }
`;
