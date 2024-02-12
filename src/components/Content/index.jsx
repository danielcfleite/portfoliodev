import { Colors } from "../Colors";
import { ProjectsCards } from "../ProjectsCard";
import { ResumeDownload } from "../Resume";
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
      <ContentHeader>
        <h1>Daniel Carvalho</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis,
          incidunt in asperiores quas velit fugit voluptates, maiores, facere
          suscipit qui quo provident debitis natus est. Animi consectetur fuga
          fugiat officia.
        </p>
      </ContentHeader>
      <Projects>
        <SectionTitle>Alguns de meus projetos</SectionTitle>
        <TagsContainer>
          <TagsBar>Front-End</TagsBar>
          <TagsBar>Back-End</TagsBar>
        </TagsContainer>
        <ProjectsCards />
        <SectionTitle>Currículo</SectionTitle>
      </Projects>
      <ResumeDownload />
      <SectionTitle>Personalização</SectionTitle>
      <Colors />
    </ContentContainer>
  );
};
