import styled from "styled-components";

export const SocialMediaNavContainer = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  z-index: 3;
  position: fixed;
  bottom: -15px;
  left: -15px;
  padding-bottom: 2rem;
  gap: 2rem;
  padding: 4rem 3rem;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 780px) {
    display: none;
  }
`;

export const Light = styled.div`
  position: absolute;
  background: radial-gradient(
    800px circle at 100px 100px,
    rgba(255, 255, 255, 0.08),
    transparent 40%
  );
  height: 100%;
  width: 100%;
  border-radius: inherit;
  content: "";
  top: 0;
  left: 0;
  pointer-events: none; /* Ensure the pseudo-element doesn't interfere with mouse events */
`;

export const SocialMediaLink = styled.a`
  margin-top: 15px;
  cursor: pointer;
  transition: 0.2s;
  color: ${(props) => props.theme.light};
  &:hover {
    transform: scale(1.06);
    filter: brightness(1.2);
  }

  /* &:first-child {
    margin-left: 15px;
  } */
`;
