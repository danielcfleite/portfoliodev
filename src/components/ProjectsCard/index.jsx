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
import { IoLogoVercel } from "react-icons/io5";

export const ProjectsCards = () => {
  return (
    <ProjectsCardContainer>
      <ProjectsCard>
        <CardImage src={LofiTodoPrint} />
        <CardTextContainer>
          <CardTitle>Lofi-Todo</CardTitle>
          <ProjectDescription>
            ⦁ Lofi - Todo é uma plataforma para tarefas com a filosofia de ser
            um ambiente confortável e relaxante, com músicas e um grau de
            personalização. <br />
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
          <CardTitle>LinkIT - Contatos</CardTitle>
          <ProjectDescription>
            ⦁ LinkIt! É uma plataforma para contatos Desktop, onde você pode
            salvar números e separá-los por categorias
            <br />
          </ProjectDescription>
          <TechnologiesContainer>
            <TechnologiesBar>HTML</TechnologiesBar>
            <TechnologiesBar>CSS</TechnologiesBar>
            <TechnologiesBar>Jquery</TechnologiesBar>
            <TechnologiesBar>Desktop</TechnologiesBar>
          </TechnologiesContainer>
          <VisitButton
            href="https://projeto-agenda-de-contatos-linkit-ebac.vercel.app/"
            target="_blank"
          >
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
            <TechnologiesBar>Rest API</TechnologiesBar>
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
    </ProjectsCardContainer>
  );
};
