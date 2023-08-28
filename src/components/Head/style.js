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

export const FacaParte = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const BotaoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 50px;
`;