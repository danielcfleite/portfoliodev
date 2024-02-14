import styled from "styled-components";
import { TagsBar } from "../Content/styles";

export const ProjectsCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2rem;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export const ProjectsCard = styled.div`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.dark};
  border-radius: 15px;
  width: 100%;
  height: ${(props) => (props.backend ? "25rem" : " 34rem")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease-in-out;
`;

export const CardTextContainer = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

export const CardTitle = styled.h3`
  margin-bottom: 1rem;
  padding: 0.2rem 1rem;
  background-color: ${(props) => props.theme.medium};
  display: inline-block;
  border-radius: 15px;
  color: #fbfada;
`;

export const ProjectDescription = styled.p`
  height: 5rem;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 1rem;
`;

export const TechnologiesBar = styled(TagsBar)`
  background-color: ${(props) => props.theme.medium};
  display: inline-block;
  height: auto;
`;

export const TechnologiesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  margin-top: 2rem;
  row-gap: 0.5rem;
  column-gap: 1rem;
  text-align: center;
`;

export const VisitButton = styled.a`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding: 0.2rem 1rem;
  background-color: ${(props) => props.theme.medium};
  display: flex;
  align-items: center;
  gap: 0.7rem;
  width: 7rem;
  border-radius: 15px;
  color: #fbfada;
  text-decoration: none;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
`;
