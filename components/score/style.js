import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1%;
  margin-top: 1.5rem;
  margin-right: 5%;
  margin-left: 5%;
  align-items: center;
  justify-content: center;
`

const Hr = styled.hr`
  width: 5%;
  height: 10%;
  border: ${props => 
    props.status === "" ? '3px #E9E9E9 solid':
    props.status === "fail" ? '3px #FF6970 solid':
    props.status === "correct" ? '3px #75EC81 solid':
    props.status === "current" ? '5px #74BCFF solid'
    : '#FCFF70'
  };
  border-radius: 4px;
`

export { Container, Hr}