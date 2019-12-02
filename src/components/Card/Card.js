import React from "react"
import styles from "./Card.module.css"


class CardBody extends React.Component {
  render() {
    console.log(this.props.output)
    const res = this.props.output.map((item) => <h4>Para {item + 1}</h4>)
    if(res.length > 10){
      res = res.slice(0, 10)
    }
    console.log(styles.card)
    return (
      <div className={styles.cardBody}>
        <h2>Word "{this.props.input}" is present in::</h2>
        {res}
      </div>
    )
  }
}

class Card extends React.Component {
  render() {
    return (
      <article className={styles.card}>
        <CardBody input = {this.props.input} output = {this.props.output}/>
      </article>
    )
  }
}

export default Card