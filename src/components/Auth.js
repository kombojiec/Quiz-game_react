import React, {Component} from 'react';
import Input from './Input';
import is from 'is_js';

export default class Auth extends Component{


  state = {
    isFormValid: false,
    formInputs: {
      email: {
        type: 'text',
        value: '',
        label: 'Em@il',
        labelClass: '',
        inputClass: 'auth__input',
        placeholder: 'Введите ваш em@il',
        errorMessage: 'Введите корректный em@il',
        errorClass: 'hidden',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        }
      },
      password: {
        type: 'password',
        value: '',
        label: 'Password',
        labelClass: '',
        inputClass: 'auth__input',
        placeholder: 'Введите ваш пароль',
        errorClass: 'hidden',
        errorMessage: 'Введите корректный пароль',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    }
  }

  renderInputs = () => {
    return(
      Object.keys(this.state.formInputs).map((item, index) => {
        const input = this.state.formInputs[item];
        return(
          <Input 
          key={index}
          onChange={(event) => this.onChangeInput(event, item)}
          type={input.type}
          value={input.value}
          label={input.label}
          labelClass={input.labelClass}
          inputClass={input.inputClass}
          placeholder={input.placeholder}
          errorClass={!input.touched || input.valid? input.errorClass: null }
          errorMessage={input.errorMessage}
          shouldValidate={!!input.validation}
          valid={input.valid}
          touched={input.touched}
          />
        )
      })
    )
  }

  formSubmit = (event)=>{
    event.preventDefault();
  }

  validateInput(value, validation){
    let isValid = true;
    if(!validation){
      return true;
    }
    if(validation.required){
      isValid = value.trim() !== '' && isValid;
    }
    if(validation.email){
      isValid = is.email(value) && isValid;
    }
    if(validation.minLength){
      isValid = value.trim().length >= validation.minLength && isValid;
    }
    return isValid;
  }

  onChangeInput = (event, item) =>{
    const formInputs = {...this.state.formInputs};
    const input = {...formInputs[item]};
    input.value = event.target.value;
    input.touched = true;
    input.valid = this.validateInput(input.value, input.validation);
    formInputs[item] = input;
    let isFormValid = true;
    if(Object.keys(formInputs).some(item => !formInputs[item].valid)){
      isFormValid = false;
    }
    
    this.setState({formInputs, isFormValid});
  }

  render(){
    return(
      <section className="section section_type_auth" >
        <h1 className="section__header section__header_type_auth"> Авторизация</h1>
        <div className="auth">
          <form onSubmit={this.formSubmit} className="auth__form">            
            {this.renderInputs()}            
            <button className="auth__button" disabled={!this.state.isFormValid} >Вход</button>
            <button className="auth__button" disabled={!this.state.isFormValid} >Регистрация</button>
          </form>
        </div>
      </section>
    )
  }
}