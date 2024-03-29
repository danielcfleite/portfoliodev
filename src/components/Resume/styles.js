import styled from "styled-components";

export const Resume = styled.a`
  width: 20rem;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: start;
  justify-content: center;
  background-color: ${(props) => props.theme.dark};
  margin-bottom: 0.5rem;
  border-radius: 15px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  gap: 1rem;
  color: ${(props) => props.theme.light};
  text-decoration: none;

  @media (max-width: 430px) {
    width: 90%;
  }

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
`;
