import styled from 'styled-components'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;

  width: 45%;
  padding: 3rem;
  padding-top:2%;
  border-right: 0.5px #74BCFF solid;

`

const NextButton = styled.button`
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

export {NextButton, InputContainer}