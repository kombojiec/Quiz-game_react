import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
// import questions from '../utils/questions';

const list = [1, 2, 3];

export default class QuizList extends Component{

  renderList(){
    return(
      list.map((test, index) =>{
        return(
          <li className='quiz-list__item' >
            <NavLink key={index} to={'/quiz/' + test} className='quiz-list__link'
            >Test #{test}</NavLink>
          </li>
        )
      })
    )
  }

  render(){
    return(
      <section className='section section_type_quiz-list'>
        <h1 className='section__header section__header_type_quiz-list'>Список тестов</h1>
        <div className='quiz-list'>
          <ul className='quiz-list__list' >
            {this.renderList()}
          </ul>
        </div>
      </section>

    )
  }
}