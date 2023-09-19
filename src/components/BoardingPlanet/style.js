import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px auto;
  gap: 20px;
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