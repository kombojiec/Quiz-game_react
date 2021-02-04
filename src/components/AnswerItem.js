
const AnswerItem = props => {
  return (
    <li className="quiz__answers-item" onClick={() => props.onAnswerClick(props.index)}>
      {props.answer.text}
    </li> 
  )
}

export default AnswerItem;