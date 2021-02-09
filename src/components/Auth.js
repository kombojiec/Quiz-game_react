import React, {Component} from 'react';

export default class Auth extends Component{


  formSubmit = (event)=>{
    event.preventDefault();
  }

  render(){
    return(
      <section className="section section_type_auth" >
        <div className="auth">
          <h1 className="auth__header"> Авторизация</h1>
          <form onSubmit={this.formSubmit} className="auth__form">
            <input type='text' className="auth__input" placeholder="Введите ваш em@il"/>
            <input type='text' className="auth__input" placeholder="Введите ваш пароль" />
            <button className="auth__button">Вход</button>
            <button className="auth__button">Регистрация</button>
          </form>
        </div>
      </section>
    )
  }
}