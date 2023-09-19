import styled from "styled-components";

export const Container = styled.div`
  /* height: 200px; */
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 100px;
`;

export const Aprensentacao = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Aviso = styled.h2`
  text-align: center;
  color: red;
  font-size: 40px;
`;

export const FacaParte = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Botao = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
`;