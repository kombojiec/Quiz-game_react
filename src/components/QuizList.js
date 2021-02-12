import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from '../utils/axios';
import Loader from './Loader';



class QuizList extends Component{

  state = {
    quizes: [],
    isLoading: true,
  }

  renderList(){
    return(
      this.state.quizes.map((test, index) =>{
        return(
          <li className='quiz-list__item' key={index}>
            <NavLink key={index} to={'/quiz/' + test.id} className='quiz-list__link'
            >{test.name}</NavLink>
          </li>
        )
      })
    )
  }

   componentDidMount(){
    try{
      const quizes = [];
      axios.get('quizes.json')
        .then(res => {
          Object.keys(res.data).map((item, index) => {
            const quiz = {
              name: `Test ${index+1}`,
              id: item,
            }
            quizes.push(quiz);
            return(quizes)
          })
          this.setState({quizes});
        })
        .finally(() => this.setState({isLoading: false}))
    }catch(error){
      console.log(error)
    }
  }

  render(){
    return(
      <section className='section section_type_quiz-list'>        
        <h1 className='section__header section__header_type_quiz-list'>Список тестов</h1>
        {this.state.isLoading?
          <Loader/>:
          <div className='quiz-list'>
            <ul className='quiz-list__list' >
              {this.renderList()}
            </ul>
          </div>
        }
      </section>

    )
  }
}

export default QuizList;