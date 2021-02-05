
const AnswerItem = props => {
  let result = '';
  let disabled = false;
  let index = '';
  switch(props.index){
    case 0: 
      index = "A";
      break;
    case 1:
      index = "B";
      break; 
    case 2:
      index = "C";
      break;
    case 3:
      index = "D";
      break;       
    default:
  }
  if(props.answerState){
    if(props.index !== props.answerId) {disabled = 'disabled';} else {disabled = false;}
    props.answerState === 'success'? result = 'success disabled': result = 'failure disabled';
  }
  return (
    <li>
      <button  type='button' disabled={disabled}
      className={`quiz__answers-item ${disabled? 'disabled': ''} ${props.index === props.answerId? result: ''}`}
      onClick={() => props.onAnswerClick(props.index)}>
        {`${index}. ${props.answer.text}`}
      </button>
    </li> 
  )
}

export default AnswerItem;