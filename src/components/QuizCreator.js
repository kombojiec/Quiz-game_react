import React, {Component} from 'react';
import Input from './Input'
import Select from './Select'
import {inputCreator, validateInput, validateForm} from '../utils/inputCreator';

function createAnswerConfig(id){
  return(
    inputCreator({
      label: `Введите ответ № ${id}`,
      errorMessage: 'Введите корректно ответ',
      inputClass: 'input__input',
      errorClass: 'hidden',
      id
    }, {required: true})
  )
}

function createInputsConfig(){
  return (
    {
      question: inputCreator({
        label: 'Введите вопрос',
        errorMessage: 'Введите корректно вопрос',
        errorClass: 'hidden',
      }, {required: true}),
      answer1: createAnswerConfig(1),
      answer2: createAnswerConfig(2),
      answer3: createAnswerConfig(3),
      answer4: createAnswerConfig(4),
    }
  )
}

export default class QuizCreator extends Component{

  state = {
    questions: [],
    rightAnswer: 1,
    formInputs: createInputsConfig(),
    isFormValid: false,
  }

  addQuestionHandler = (event) =>{
    event.preventDefault();
    const questArray = this.state.questions.concat();
    const {answer1, answer2, answer3, answer4, question} = this.state.formInputs;
    const quiz = {
      question: question.value,
      id: this.state.questions.length,
      rightAnswer: this.state.rightAnswer,
      answer1: answer1.value,
      answer2: answer2.value,
      answer3: answer3.value,
      answer4: answer4.value,      
    }
    questArray.push(quiz);
    this.setState({
      questions: questArray,
      formInputs: createInputsConfig(),
      isFormValid: false,
    })   
  }

  createQuizHandler = (event) =>{
    event.preventDefault();
    console.log(this.state.questions)
  }

  inputChangeHandler = (event, item) => {
    const formInputs = {...this.state.formInputs};
    const input = formInputs[item]
    input.touched = true;
    input.value = event;
    input.valid = validateInput(input.value, input.validation);
    const isFormValid = validateForm(formInputs);
    formInputs[item] = input;
    this.setState({formInputs, isFormValid})
  }

  renderInputs = () => {
    return Object.keys(this.state.formInputs).map((item, index) => {
      const input = this.state.formInputs[item];
      return(
        <React.Fragment key={index}>          
          <Input            
            onChange={(event) =>this.inputChangeHandler(event.target.value, item)}
            label={input.label}
            value={input.value}
            valid={input.valid}
            shouldValidate={!!input.validation}
            touched={input.touched}
            errorMessage={input.errorMessage}   
            inputClass={input.inputClass}  
            errorClass={!input.touched || input.valid? input.errorClass: null}
          >     
          </Input>

          {index===0?<hr/>:null}
        </React.Fragment>
      )
    })
  }

  selectChangeHandler = event =>{
    // console.log(event.target.value)
    this.setState({rightAnswer: event.target.value})
  }

  render(){
    const select = <Select
      value={this.rightAnswer}
      label={'Выберите правильный ответ'}
      onChange={this.selectChangeHandler}
      options= {[
        {text:1, value: 1},
        {text:2, value: 2},
        {text:3, value: 3},
        {text:4, value: 4},
      ]}
    ></Select>

    return(
      <section className='section section_type_create'>
        <h1 className='section__header section__header_type_create'>Создание теста</h1>
        <div className='create'>
          <form className='create__form'>            
            {this.renderInputs()}   
            {select}         
            <button className='create__button' onClick={this.addQuestionHandler} disabled={!this.state.isFormValid} >Добавить вопрос</button>
            <button className='create__button' onClick={this.createQuizHandler} disabled={!this.state.questions.length} >Создать тест</button>
          </form>
        </div>
      </section>
    )
  }
}