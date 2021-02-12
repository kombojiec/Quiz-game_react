import AnswerItem from './AnswerItem'

const AnswersList = props => {
 return(
  <ul className="quiz__answers">
    {props.answers.map((answer, index) => {
      const key = Object.keys(answer)[0];
      // console.log('answer = ', answer[key])
      return(
        <AnswerItem 
          key={index}
          answer={answer[key]}
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