import { ProjectsCards } from "../ProjectsCard";
import {
  ContentContainer,
  ContentHeader,
  PresentationBar,
  Projects,
  TagsContainer,
  TagsBar,
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
        <h2>Alguns de meus projetos</h2>
        <TagsContainer>
          <TagsBar>Front-End</TagsBar>
          <TagsBar>Back-End</TagsBar>
        </TagsContainer>
        <ProjectsCards />
      </Projects>
    </ContentContainer>
  );
};
