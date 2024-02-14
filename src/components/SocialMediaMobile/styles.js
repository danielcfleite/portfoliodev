import styled from "styled-components";

export const SocialMediaMobile = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 780px) {
    display: none;
  }
`;

export const SocialMediaMobileLink = styled.a`
  margin-top: 15px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.06);
    filter: brightness(1.2);
  }

  text-decoration: none;
  color: ${(props) => props.theme.light};

  /* &:first-child {
    margin-left: 15px;
  } */
`;
