import React, {Component} from "react"
import styles from "./LayoutContainer.module.css"
import Toolbar from "./../Toolbar/Toolbar"
import Form from "./../formsContainers/form"
import ProjectDesc from "./../UI/ProjectDesc/ProjectDesc"

class LayoutContainer extends Component{
  render(){
    return(
      <div className = {styles.LayoutContainer}>
        <Toolbar/>
        <ProjectDesc/>
        <Form/>
      </div>
    )
  }
}

export default LayoutContainer;