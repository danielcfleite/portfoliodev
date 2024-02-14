import styled from "styled-components";

export const ColorCard = styled.div`
  padding: 0.5rem;
  background-color: ${(props) =>
    props.color === "green"
      ? "#436850"
      : props.color === "purple"
      ? "#3C0753"
      : props.color === "dark"
      ? "#1B4242"
      : "white"};

  cursor: pointer;
  border-radius: 15px;
  width: 100%;
  height: ${(props) => (props.backend ? "25rem" : " 34rem")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out;

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
`;

export const ColorsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 2rem;
  column-gap: 2rem;
  row-gap: 2rem;

  @media (max-width: 1400px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;
