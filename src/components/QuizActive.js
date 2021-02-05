import AnswersList from './AnswersList';


const QuizActive = props =>{
 return(
  <div className="quiz__container">
   <div className="quiz__header">
    <p><strong>{props.currentQuestion}.&nbsp;</strong> {props.question}?</p>
    <strong>{props.currentQuestion} из {props.questionsLength}</strong>
   </div>
    <AnswersList 
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
      answerState={props.answerState}
      rightAnswerId={props.rightAnswerId}
      answerId={props.answerId}
    />
  </div>
 )
}

export default QuizActive;