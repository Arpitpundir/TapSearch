import React from "react";
import styles from "./Toolbar.module.css";
import Button from "../UI/Button/Button";
import Name from "./../Profile/name"

const Toolbar = (props)=>{
  return(
    <div className = {styles.Toolbar}>
        <Name>TapSearch</Name>
    </div>
  )
}
export default Toolbar;