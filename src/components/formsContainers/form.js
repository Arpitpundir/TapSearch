import React, {Component} from "react";
import Button from "../UI/Button/Button";
import styles from "./form.module.css";
import Card from "../Card/Card"
import Input from "../UI/Input/Input";
import Validator from "validator"
import * as textProcessor from "../../utils/textProcesser"

class form extends Component{
  constructor(props){
    super(props)
    this.state = {
      form:{
        text: {
          elementType: "textarea",
          inputType: "textarea",
          placeholder: "Enter text here",
          value: "",
          validationRules:{
            required: true
          },
          valid: false,//whether value is false or correct
          touched: false
        },
        searchWord:{
          elementType: "input",
          inputType: "text",
          placeholder: "Enter Search Word",
          valid: "false",
          validationRules:{
            required: true,
          },
          valid: false,
          touched: false
        },
      },
      search:{
        input: null,
        output: null
      },
      formIsValid: false,//this property can be used to check whether we can submit the form or not
      indexObj: null,
    }
  }

  checkValidity(rules, value){
    let isValid = true
    Object.keys(rules).forEach(rule => {
      if(rule == "required"){
        isValid = isValid && !Validator.isEmpty(Validator.ltrim(Validator.rtrim(value)))
      }else if(rule == "minlen"){
        isValid = isValid && Validator.isLength(value, rules[rule])
      }else if(rule == "maxlen"){
        isValid = isValid && Validator.isLength(value, 0, rules[rule]+1)
      }else if(rule == "isEmail"){
        isValid = isValid && Validator.isEmail(value)
      }else if(rule == "isNumber"){
        isValid = isValid && Validator.isNumeric(value)
      }
    })
    return isValid
  }
  inputChangedHandler(event, inputIdentifier){
    //make an instance fo the form
    const updatedForm = {
      ...this.state.form
    }
    //console.log(updatedForm)
    //console.log(inputIdentifier)
    //get the element of yhe form which needs to be updated 
    const updatedFormElement = updatedForm[inputIdentifier]

    //set the new value
    updatedFormElement.value = event.target.value
    //check the validity of the new value
    updatedFormElement.valid = this.checkValidity(updatedFormElement.validationRules, updatedFormElement.value)

    updatedFormElement.touched = true
    
    //set the element of the form to the updated form
    updatedForm[inputIdentifier] = updatedFormElement
    
    //check the validity of the form
    let formIsValid = true
    for (let inputIdentifier in updatedForm){
      formIsValid = updatedForm[inputIdentifier].valid && formIsValid
    }

    //set the from in the state to the updated form and also set the validity status of yhe form
    this.setState({
      form:updatedForm,
      formIsValid: formIsValid
    })

  }

  indexButtonHandler = (event)=>{
    event.preventDefault()
    if(!this.state.form.text.valid){
      alert("There is no text for Invert Indexing")
      return
    }else{
      let text = textProcessor.removeStopWords(this.state.form.text.value.toLowerCase())
      //console.log(text)
      let paras = textProcessor.splitInParas(text)
      console.log(paras)
      let indexObj = textProcessor.invertIndexing(paras)
      console.log(indexObj)
      this.setState({
        indexObj: indexObj
      })
      alert("Invert Indexing Successfull. Please look in the console for Invert Index Array!")
    }
  }

  searchButtonHandler = (event)=>{
    event.preventDefault()
    if(this.state.indexObj == null){
      alert("Press Index Button First before Search")
      return
    }
    if(!this.state.formIsValid){
      alert("Please Fill up the form properly")
      return
    }
    const indexObj = this.state.indexObj
    console.log(indexObj)
    console.log(event.target.value.toLowerCase())
    let output = indexObj[this.state.form.searchWord.value.toLowerCase()] === undefined?[]:indexObj[this.state.form.searchWord.value.toLowerCase()]

    this.setState({
      search:{
        input: this.state.form.searchWord.value,
        output: output
      }
    })
  }
  clearButtonhandler = ()=>{
    //location.reload(true)
  }

  render(){
    const form = Object.keys(this.state.form).map(inputField => (
      <Input elementType = {this.state.form[inputField].elementType}
      inputType = {this.state.form[inputField].inputType}
      placeholder = {this.state.form[inputField].placeholder}
      value = {this.state.form[inputField].value}
      valid = {this.state.form[inputField].valid}
      changed = {(event) => this.inputChangedHandler(event, inputField)}
      touched = {this.state.form[inputField].touched}
      />
    ))
    return(
      <form className = {styles.SignupFormContainer}>
        {form}
        {
          this.state.search.output?<Card input = {this.state.search.input} output = {this.state.search.output}></Card>:null
        }
        <Button classes = {["Submit"]} disabled = {!this.state.formIsValid} clicked = {this.indexButtonHandler}>Index</Button>
        <Button classes = {["Submit"]} disabled = {!this.state.formInValid} clicked = {this.searchButtonHandler}>Search</Button>
        <Button classes = {["Submit"]} disabled = {!this.state.formIsValid}>Clear</Button>
      </form>
    )
  }
}

export default form;