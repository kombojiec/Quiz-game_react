// const isInvalid = ({valid, shouldValid, touched}) =>{
//   return !valid && shouldValid && touched;
// }


const Input = props =>{
  const id = (props.type || "text") + '-' + Math.random();
  return(
    <div className='input'>

      <label 
        htmlFor={id} 
        className={`input__label ${props.labelClass?props.labelClass: ''}`}
      >
        {props.label}
      </label>

      <input 
        type={props.type || 'text'}
        className={`input__input ${props.inputClass?props.inputClass: ''}`}
        id={id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />

      <span className={`input__error ${props.errorClass? props.errorClass: ''}`}>
        {props.errorMessage || 'Введите корректное значение.' }
      </span>

    </div>
  )
}

export default Input;