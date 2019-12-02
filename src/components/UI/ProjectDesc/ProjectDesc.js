import React from "react"
import styles from "./ProjectDesc.module.css"

const ProjectDesc = (props)=>{
  return(
    <div className = {styles.ProjectDesc}>
      <div className = {styles.Item}>
        Tapsearch Assingement
      </div>
      <div>
        <ul className = {styles.Item}>
          <li className = {styles.Item}><a href = ""></a>Project Video</li>
          <li className = {styles.Item}><a href = "">Project Github Repository</a></li>
        </ul>
        <ul>
          Arpit Pundir
          <li className = {styles.Item}>
            <a href = "https://www.linkedin.com/in/arpit-pundir-091094153/">Linkedin</a>
          </li>
          <li className = {styles.Item}>
            <a href = "https://medium.com/@thakurarpitpundir73">Medium</a> 
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProjectDesc