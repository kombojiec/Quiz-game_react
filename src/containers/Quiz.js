import React, {Component} from 'react';
import QuizActive from '../components/QuizActive';
import QuizResult from '../components/QuizResult';
import axios from '../utils/axios';
import Loader from '../components/Loader';

export default  class Quiz extends Component{

  state = {
    currentQuestion: 0, 
    quiz: [],
    rightAnswers: 0,
    answerState: null,
    answerId: null,
    isFinished: false,
    isLoading: true,
  }

  onAnswerClickHandler = (answerId) =>{
    if(this.state.answerState) return;
    this.setState({answerState: ''})
    const question = this.state.quiz[this.state.currentQuestion];
    this.setState({answerId: answerId-1})
    if(+question.rightAnswer === +answerId){
      this.setState({rightAnswers: this.state.rightAnswers + 1});
      this.setState({answerState: 'success'});
    }else{
      this.setState({answerState: 'failure'});
    }
    if(this.isLastQuestion()){
      setTimeout(() => {
        this.setState({isFinished: true})
      },1000)
    }else{
      setTimeout(() => {
        this.setState({answerState: null})
        this.setState({currentQuestion: this.state.currentQuestion +1});        
        clearTimeout();
      }, 1000);
    }
  }

  isLastQuestion = () =>{
    return this.state.currentQuestion + 1 === this.state.quiz.length;
  }

  playAgainHandler = () =>{
    this.setState({
      currentQuestion: 0, 
      quiz: this.state.quiz,
      rightAnswers: 0,
      answerState: null,
      answerId: null,
      isFinished: false,
    })
  }

  async componentDidMount(){    
    try{
      await axios.get(`quizes/${this.props.match.params.id}.json`)
      .then(res => {
        this.setState({quiz: res.data})
      })
      .finally(()=> this.setState({isLoading: false}))
    }catch(error){
      console.log(error)}
   
  }

  render(){
    return(
      <section className=' section quiz'>        
        <h1 className='section__header quiz__title'>Quiz for programmer</h1>
        {this.state.isLoading?
        <Loader/>:
        this.state.isFinished?
          <QuizResult 
            result={this.state.rightAnswers}
            ammount={this.state.quiz.length}
            playAgain={this.playAgainHandler}
            />:
            <QuizActive            
            answers={this.state.quiz[this.state.currentQuestion].answers}
            question={this.state.quiz[this.state.currentQuestion].question}
            currentQuestion={this.state.currentQuestion + 1}
            questionsLength={this.state.quiz.length}
            onAnswerClick={this.onAnswerClickHandler}
            answerState={this.state.answerState}
            rightAnswerId={this.state.quiz[this.state.currentQuestion].rightAnswer}
            answerId={this.state.answerId}
            />
          
        }
      </section>
    )
  }
}