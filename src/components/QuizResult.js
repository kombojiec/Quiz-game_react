import React from 'react';
import {Link} from 'react-router-dom';

const QuizResult = props => {
  const result = (props.result/props.ammount*100).toPrecision(3);
  return(
    <div className="quiz__container"> 
      <h3>{result>50? 
        `Отлично!!! ${result}% - ты знаешь большую часть!!!`: 
        `Слабовато... Всего ${result}% правильных ответов. Попробуешь ещё разок?`}
      </h3>
      <p>Твой результат {props.result} из {props.ammount}</p>
      <div className="quiz__buttons" >
        <Link to='/' className='quiz__button-link'>
          <button className='quiz__button' type='button' > Список тестов</button>
        </Link>
        <button className='quiz__button' type='button' onClick={props.playAgain}>Ещё разок ?</button>
      </div>
    </div>
  )
}

export default QuizResult;