import styled from "styled-components";
import { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  z-index: 5;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
      pointer-events: all;
    `}

  > .overlay {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 50%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }
`;

export const Content = styled.div`
  display:flex;
  flex-direction: column;
  min-width: 500px;
  padding: 60px 0;
  margin: 0 auto;
  background-color: white;
  z-index: 1;
  position: relative;
  border-radius: 45px;
  align-items: center;
  justify-content: center;
  border: 2px #74BCFF solid;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

export const Title = styled.h1`
  font-family: 'Niramit', sans-serif;
  font-size: 4rem;
  text-align: center;
  margin-bottom:10%;
  margin-top:0;
`

export const Points = styled.p`
  font-family: 'Strait', sans-serif;
  font-size: 1.5rem;
  text-align: center;

`
export const Footer = styled.p`
  font-family: 'Strait', sans-serif;
  font-size: 1rem;
  text-align: center;
  margin-top:10%;

`

export const NextButton = styled.button`
  background-color: #74BCFF;
  border: none;
  color:#fff;
  font-family: 'Strait', sans-serif;
  font-size: 1.5rem;
  padding: 0.3rem;
  width: 25%;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.2s;
  :hover{
    background-color: #42A4FF;
  }
`