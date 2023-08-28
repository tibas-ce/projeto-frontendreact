import styled from "styled-components";

export const Container = styled.div`
    margin-top: 10px;
    margin-left: 10px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    height: 100px;
    justify-content: space-between;
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
    color: black;
`;