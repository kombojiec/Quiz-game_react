import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

const list = [1, 2, 3];

export default class QuizList extends Component{

  renderList(){
    return(
      list.map((test, index) =>{
        return(
          <li className='quiz-list__item' >
            <NavLink key={index} to={'/quiz-list/' + test} className='quiz-list__link'
            >Test #{test}</NavLink>
          </li>
        )
      })
    )
  }

  render(){
    return(
      <section className='section section_type_quiz-list'>
        <div className='quiz-list'>
          <h1 className='quiz-list__header'>Список тестов</h1>
          <ul className='quiz-list__list' >
            {this.renderList()}
          </ul>
        </div>
      </section>

    )
  }
}