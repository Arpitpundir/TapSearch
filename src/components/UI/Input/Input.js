import React from "react";
import styles from "./Input.module.css";
import Aux from "./../../../hocs/Aux/Aux"

const input = (props)=>{
  let inputElement = null//we will use this var to store the final return value
  const inputClasses = [styles.InputElement]

  if(!props.valid && props.touched){
    inputClasses.push(styles.Invalid)
    //for adding an invalid classes that can help user to know what is wrong
  }

  switch(props.elementType){
    case("input"):
    inputElement = <input
      className = {inputClasses.join("  ")}
      type = {props.inputType}
      placeholder = {props.placeholder}
      onChange = {props.changed}/>
      break
    case("textarea"):
    inputElement = <textarea
      className = {inputClasses.join("  ")}
      type = {props.inputType}
      placeholder = {props.placeholder}
      value = {props.value}
      onChange = {props.changed}
      rows = {"15"} cols = {"80"}/>
      break
    case("select"):
      inputElement = <select
        className = {styles.join(" ")}
        value = {props.value}
        onChange = {props.changed}>
          {
            props.elementConfig.options.map(option => (
              <option key = {option.value} value = {option.value}>
                {option.displayValue}
              </option>
            ))
          }
        </select>
      break
    default:
      inputElement = <input
      className = {inputClasses.join("  ")}
      type = {props.inputType}
      placeholder = {props.placeholder}
      value = {props.value}
      onChange = {props.changed}/>
  }

  return(
    <Aux>
      {inputElement}
    </Aux>
  )

}

export default input