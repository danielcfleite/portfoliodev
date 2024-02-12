import styled from "styled-components";

export const ContentContainer = styled.div`
  padding: 1rem 2rem;
`;

export const ContentHeader = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
`;

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PresentationBar = styled.p`
  padding: 0.5rem;
  background-color: ${(props) => props.theme.dark};
  display: inline-block;
  margin-bottom: 0.5rem;
  border-radius: 15px;
`;

export const TagsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const TagsBar = styled.p`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.dark};
  display: inline-block;
  margin-bottom: 0.5rem;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`;
