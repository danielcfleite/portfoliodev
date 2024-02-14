import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin:0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background-color: ${(props) => props.theme.backroundColor};
    color: ${(props) => props.theme.light};
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;
  width: 100%;
  max-width: 1650px;
  margin: 0 auto;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
