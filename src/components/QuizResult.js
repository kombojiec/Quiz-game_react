
const QuizResult = props => {
  const result = (props.result/props.ammount*100).toPrecision(3);
  return(
    <div className="quiz__container"> 
      <h3>{result>50? 
        `Отлично!!! ${result}% - ты знаешь большую часть!!!`: 
        `Слабовато... Всего ${result}% правильных ответов. Попробуешь ещё разок?`}
      </h3>
      <p>Твой результат {props.result} из {props.ammount}</p>
      <button className='quiz__button' type='button' onClick={props.playAgain}>Ещё разок ?</button>
    </div>
  )
}

export default QuizResult;