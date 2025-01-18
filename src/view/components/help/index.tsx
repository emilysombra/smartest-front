import { AppContainer } from "../../../styles/global";
import { Container, Content, Title } from "./style";

export default function Help(){
    return (
        <AppContainer>
            <Container>
                <Title>Como utilizar o Smartest:</Title>
                <Content>
                    <h2>Olá, boas vindas ao Smartest!</h2>
                    <p>O Smartest é uma plataforma de ensino de teste de software desenvolvido por estudantes de Ciência da Computação
                        da Universidade Estadual do Ceará. Na página inicial, você encontrará conteúdos explicativos sobre testes, bem
                        como breve apresentação das carreiras que você poderá atuar utilizando seus conhecimentos na área.
                    </p>
                    <p>O destaque da plataforma, porém, se encontra na página "Chatbot", onde você poderá conversar com um assistente
                        virtual que utiliza Inteligência Artificial Generativa para tirar suas dúvidas e ampliar seus conhecimentos sobre
                        testes de software. E o melhor: você não paga nada por isso!
                    </p>
                    <br/>
                    <h3>Perguntas mais frequentes:</h3>
                    <h4>Qual o modelo utilizado?</h4>
                    <p>Atualmente o Smartest utiliza como base o modelo Sabiá-3, desenvolvido pela equipe brasileira Maritaca AI.</p>
                    
                </Content>
            </Container>
        </AppContainer>
    )
}