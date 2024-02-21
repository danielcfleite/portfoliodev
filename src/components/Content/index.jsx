import { Colors } from "../Colors";
import { ProjectsCards } from "../ProjectsCard";
import { ResumeDownload } from "../Resume";
import { SocialMediaForMobile } from "../SocialMediaMobile";
import {
  ContentContainer,
  ContentHeader,
  PresentationBar,
  Projects,
  // TagsContainer,
  // TagsBar,
  SectionTitle,
} from "./styles";

export const Content = () => {
  const tag = "<Olá, sou/>";
  return (
    <ContentContainer>
      <PresentationBar>{tag}</PresentationBar>
      <ContentHeader id="about">
        <h1>Daniel Carvalho</h1>
        <SocialMediaForMobile />
        <p>
          Desde a minha formação como designer, descobri uma paixão por
          construir experiências digitais criativas que gerem engajamento. Em
          uma jornada constante para aprender e compartilhar conhecimentos de
          programação, atualmente estou focando no desenvolvimento front-end
          para poder criar experiências cada vez melhores. Acredito fortemente
          no crescimento através do desafio, por isso estou sempre aberto a
          novos aprendizados e ferramentas.
        </p>
      </ContentHeader>
      <Projects id="projects">
        <SectionTitle>Alguns de meus projetos</SectionTitle>
        {/* <TagsContainer>
          <TagsBar>Front-End</TagsBar>
          <TagsBar>Back-End</TagsBar>
        </TagsContainer> */}
        <ProjectsCards />
        <SectionTitle id="resume">Currículo</SectionTitle>
      </Projects>
      <ResumeDownload />
      <SectionTitle id="colors">Personalização</SectionTitle>
      <Colors />
    </ContentContainer>
  );
};
