
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
    console.log(props)
    if(props.index !== props.answerId) {disabled = 'disabled';} 
    props.answerState === 'success'? result = 'success disabled': result = 'failure disabled';
  }
  return (
    <li>
      <button  type='button' disabled={disabled}
      className={`quiz__answers-item ${disabled? 'disabled': ''} ${props.index === props.answerId? result: ''}`}
      onClick={() => props.onAnswerClick(props.index+1)}>
        {`${index}. ${props.answer}`}
      </button>
    </li> 
  )
}

export default AnswerItem;