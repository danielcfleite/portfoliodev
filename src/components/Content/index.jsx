import { Colors } from "../Colors";
import { ProjectsCards } from "../ProjectsCard";
import { ResumeDownload } from "../Resume";
import { SocialMediaForMobile } from "../SocialMediaMobile";
import {
  ContentContainer,
  ContentHeader,
  PresentationBar,
  Projects,
  TagsContainer,
  TagsBar,
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          incidunt in asperiores quas velit fugit voluptates, maiores, facere
          suscipit qui quo provident debitis natus est. Animi consectetur fuga
          fugiat officia.
        </p>
      </ContentHeader>
      <Projects id="projects">
        <SectionTitle>Alguns de meus projetos</SectionTitle>
        <TagsContainer>
          <TagsBar>Front-End</TagsBar>
          <TagsBar>Back-End</TagsBar>
        </TagsContainer>
        <ProjectsCards />
        <SectionTitle id="resume">Currículo</SectionTitle>
      </Projects>
      <ResumeDownload />
      <SectionTitle id="colors">Personalização</SectionTitle>
      <Colors />
    </ContentContainer>
  );
};
