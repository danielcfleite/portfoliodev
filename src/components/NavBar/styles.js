import styled from "styled-components";

export const ContainerNav = styled.nav`
  width: 62.5rem;
  height: 100%;
  text-align: end;
  padding: 0.5rem 2rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.light};
  opacity: 0.8;
  font-size: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: 0.15s ease-in-out;
  margin-bottom: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0);

  span {
    transition: 0.2s ease-in-out;
    padding-right: 2rem;
    opacity: 0;
    overflow: hidden;
  }

  &:hover {
    padding-right: 20px;
    filter: brightness(1.2);
    border-right: 1px solid rgba(255, 255, 255, 0.07);
  }

  &:hover > span {
    padding-right: 1rem;
    opacity: 1;
  }
`;
