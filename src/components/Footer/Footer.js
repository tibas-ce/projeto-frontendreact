import { BottonContainer, Container } from "./style";


const Footer = () => {
    const urlGithub = "https://github.com/tibas-ce";

    const urlLinkedin = "https://www.linkedin.com/in/tiberio-ferreira/";

    return (
        <>
        <Container>
            <h2>Produzido por:</h2>
            <h3>Tibério dos Santos Ferreira</h3>
            <BottonContainer>
                <a href={urlLinkedin} target="_blank" rel="noopener noreferrer" ><button>LinkedIn</button></a>
                <a href={urlGithub} target="_blank" rel="noopener noreferrer" ><button>GitHub</button></a>                
            </BottonContainer>
            <p>Projeto de introdução ao React proposto pelo bootcamp Labenu.</p>
        </Container>
        </>
    )
};

export default Footer;