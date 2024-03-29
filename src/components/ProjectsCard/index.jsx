import {
  CardImage,
  CardTextContainer,
  CardTitle,
  ProjectDescription,
  ProjectsCard,
  ProjectsCardContainer,
  TechnologiesBar,
  TechnologiesContainer,
  VisitButton,
} from "./styles";

import LofiTodoPrint from "../../assets/lofi-todo-print.png";
import LinkItPrint from "../../assets/linkit-print.png";
import LojaDeJogosPrint from "../../assets/loja-de-jogos-print.png";
import { IoLogoGithub, IoLogoVercel } from "react-icons/io5";

export const ProjectsCards = () => {
  return (
    <ProjectsCardContainer>
      <ProjectsCard>
        <CardImage src={LofiTodoPrint} />
        <CardTextContainer>
          <CardTitle>Lofi | To - do</CardTitle>
          <ProjectDescription>
            ⦁ Lofi | To - do é uma plataforma Desktop para listar e gerenciar
            cumprimento de tarefas com a filosofia de ser um ambiente
            confortável e relaxante, com músicas e um grau de personalização.{" "}
            <br />
          </ProjectDescription>
          <TechnologiesContainer>
            <TechnologiesBar>React</TechnologiesBar>
            <TechnologiesBar>Typescript</TechnologiesBar>
            <TechnologiesBar>Desktop</TechnologiesBar>
          </TechnologiesContainer>
          <VisitButton
            href="https://lofi-todo-ignite.vercel.app/"
            target="_blank"
          >
            Visite <IoLogoVercel />
          </VisitButton>
        </CardTextContainer>
      </ProjectsCard>
      <ProjectsCard>
        <CardImage src={LinkItPrint} />
        <CardTextContainer>
          <CardTitle>LinkIt! - Contatos</CardTitle>
          <ProjectDescription>
            ⦁ LinkIt! é uma plataforma para contatos, onde você pode salvar
            números e separá-los por categorias/grupos.
            <br />
          </ProjectDescription>
          <TechnologiesContainer>
            <TechnologiesBar>React</TechnologiesBar>
            <TechnologiesBar>Typescript</TechnologiesBar>
            <TechnologiesBar>Redux</TechnologiesBar>
            <TechnologiesBar>Styled Components</TechnologiesBar>
          </TechnologiesContainer>
          <VisitButton href="https://link-it-react.vercel.app/" target="_blank">
            Visite <IoLogoVercel />
          </VisitButton>
        </CardTextContainer>
      </ProjectsCard>
      <ProjectsCard>
        <CardImage src={LojaDeJogosPrint} />
        <CardTextContainer>
          <CardTitle>Loja de Jogos</CardTitle>
          <ProjectDescription>
            ⦁ Projeto de Loja de jogos desenvolvido com bootstrap, consumindo a
            API RAWG Database
            <br />
          </ProjectDescription>
          <TechnologiesContainer>
            <TechnologiesBar>HTML</TechnologiesBar>
            <TechnologiesBar>Bootstrap</TechnologiesBar>
            <TechnologiesBar>Jquery</TechnologiesBar>
            <TechnologiesBar>Responsivo</TechnologiesBar>
          </TechnologiesContainer>
          <VisitButton
            href="https://projeto-bootstrap-ebac.vercel.app/"
            target="_blank"
          >
            Visite <IoLogoVercel />
          </VisitButton>
        </CardTextContainer>
      </ProjectsCard>
      <ProjectsCard backend>
        <CardTextContainer>
          <CardTitle>Daily Diet API</CardTitle>
          <ProjectDescription>
            Back end para a aplicação Daily Diet, onde o usuário pode mandar
            referência de refeições que fez e se estavam na sua dieta ou não.
          </ProjectDescription>
          <TechnologiesContainer>
            <TechnologiesBar>Node</TechnologiesBar>
            <TechnologiesBar>Fastify</TechnologiesBar>
            <TechnologiesBar>RegEx</TechnologiesBar>
          </TechnologiesContainer>
          <VisitButton
            href="https://github.com/danielcfleite/ignite-daily-diet-api"
            target="_blank"
          >
            Visite <IoLogoGithub />
          </VisitButton>
        </CardTextContainer>
      </ProjectsCard>
    </ProjectsCardContainer>
  );
};
