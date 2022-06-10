import {Input, Label, NextButton } from "./style"
import { useState, useEffect} from "react"

const InputArea = (props) => {  
  const [value, setValue] = useState("")


  return (
    <>
      <Label background={props.backgroundColor} value={props.label} isCheck={props.isChecked} onClick={props.onClick}>
        <Input value={props.label} type="radio" name="questions"/>
        {props.label}
      </Label>
    </>
  )
}

export default InputArea