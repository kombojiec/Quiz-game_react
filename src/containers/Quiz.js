import React, {Component} from 'react';
import QuizActive from '../components/QuizActive';
import questions from '../utils/questions';

export default class Quiz extends Component{

  state = {
    currentQuestion: 0, 
    quiz: questions,
  }

  onAnswerClickHandler = (answerId) =>{
    console.log(answerId);
    this.setState({currentQuestion: this.state.currentQuestion +1})
  }

  render(){
    return(
      <section className='quiz'>
        <h1 className='quiz__title'>Quiz Title</h1>
        <QuizActive
          answers={this.state.quiz[this.state.currentQuestion].answers}
          question={this.state.quiz[this.state.currentQuestion].question}
          currentQuestion={this.state.currentQuestion + 1}
          questionsLength={this.state.quiz.length}
          onAnswerClick={this.onAnswerClickHandler}
        />
      </section>
    )
  }
}