import styled, { keyframes } from "styled-components";

const animationHome = keyframes`
  to{
    opacity: 1;
  }
`;


export const HomePageContainer = styled.div`
  animation: ${animationHome} 1s forwards;
  opacity: 0;

   background: linear-gradient(#cee1ff,#0044ff);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 2rem;

  h1 {
    font-size: 3rem;
    color: white;
    text-align: center;
  }

  p {
    font-size: 2rem;
    color: white;
    text-align: center;
  }

  span {
    font-size: 1.3rem;
    color: var(--black-1);
    text-align: center;
  }

  .box1 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 31.25rem;
  }

  .box2 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    max-width: 31.25rem;
  }

  a {
    border: 0.5px solid white;
    border-radius: 0.313rem;
    padding: 0.313rem;
    text-align: center;
    font-weight: bold;
    color: white;
    max-width: 18.75rem;
    width: 50%;
    margin: 0 auto;
    transition :all 0.8s;

    :hover {
      transition: 0.7s;
      background-color: orange;
      scale:1.1;
    }
  }
`;
