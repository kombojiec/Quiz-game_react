import AnswerItem from './AnswerItem'

const AnswersList = props => {
 return(
  <ul className="quiz__answers">
    {props.answers.map((answer, index) => {
      return(
        <AnswerItem 
          key={index}
          answer={answer}
          index={index}
          onAnswerClick={props.onAnswerClick}
          answerState={props.answerState}
          rightAnswerId={props.rightAnswerId}
          answerId={props.answerId}
        />
      )
    })}
  </ul>
 )
}

export default AnswersList;