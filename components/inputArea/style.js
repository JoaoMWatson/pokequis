import styled from 'styled-components'

const Input = styled.input`
  -webkit-appearance: none;
  appearance: none;
  margin: 0;

  background-color: #74BCFF;
  font: inherit;
  width: 1.3rem;
  height: 1.2rem;
  border-radius: 40%;
  :checked {
    background-color: #42A4FF;
  }
`

const Label = styled.label`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  width: 90%;
  height: 5rem;
  align-items: center;
  padding: 1.5rem;

  font-family: 'Strait', sans-serif;
  font-size: 1.3rem;
  background: ${props => props.isCheck ? '#EAEAEA':'#F8F8F8'};
  border-radius: 16px;
  transition: background-color 0.2s;

  :hover{
    background-color: #EAEAEA;
  }
`



export { Input, Label }