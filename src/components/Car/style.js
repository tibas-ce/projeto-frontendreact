import styled from "styled-components";

export const CarContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-right: 10px;
    height: 100px;
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

export const Button = styled.button`
  &:hover {
    cursor: pointer;
    background-color: red;
  }
`;