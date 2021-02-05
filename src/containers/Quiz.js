import React, {Component} from 'react';
import QuizActive from '../components/QuizActive';
import QuizResult from '../components/QuizResult';
import questions from '../utils/questions';

export default class Quiz extends Component{

  state = {
    currentQuestion: 0, 
    quiz: questions,
    rightAnswers: 0,
    answerState: null,
    answerId: null,
    isFinished: false,
  }

  onAnswerClickHandler = (answerId) =>{
    if(this.state.answerState) return;
    this.setState({answerState: ''})
    const question = questions[this.state.currentQuestion];
    this.setState({answerId})

    if(question.rightAnswerId === answerId){
      this.setState({rightAnswers: this.state.rightAnswers + 1});
      this.setState({answerState: 'success'});
    }else{
      this.setState({answerState: 'failure'});
    }
    if(this.isLastQuestion()){
      this.setState({isFinished: true})
    }else{
      setTimeout(() => {
        this.setState({answerState: null})
        this.setState({currentQuestion: this.state.currentQuestion +1});        
        clearTimeout();
      }, 1000);
    }
  }

  isLastQuestion = () =>{
    return this.state.currentQuestion + 1 === questions.length;
  }

  playAgainHandler = () =>{
    this.setState({
      currentQuestion: 0, 
      quiz: questions,
      rightAnswers: 0,
      answerState: null,
      answerId: null,
      isFinished: false,
    })
  }

  render(){
    return(
      <section className='quiz'>
        <h1 className='quiz__title'>Quiz for programmer</h1>
        {this.state.isFinished?
          <QuizResult 
            result={this.state.rightAnswers}
            ammount={questions.length}
            playAgain={this.playAgainHandler}
          />
        :
          <QuizActive
            answers={this.state.quiz[this.state.currentQuestion].answers}
            question={this.state.quiz[this.state.currentQuestion].question}
            currentQuestion={this.state.currentQuestion + 1}
            questionsLength={this.state.quiz.length}
            onAnswerClick={this.onAnswerClickHandler}
            answerState={this.state.answerState}
            rightAnswerId={questions.rightAnswerId}
            answerId={this.state.answerId}
          />
        }
      </section>
    )
  }
}