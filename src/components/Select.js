
const Select = props => {

  const id = `${props.label}-${Math.random}`

  return(
    <div className='select'>
      <label className='select__label' htmlFor={id} >{props.label}</label>
      <select className='select__select' id={id} 
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option, index) => {
          return(
            <option
              key={index}
              value={option.value}
            >
              {option.text}
            </option>
          )
        })}
      </select>
      
    </div>
  )
}

export default Select;