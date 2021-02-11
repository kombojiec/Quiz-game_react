
const inputCreator = (config, validation) =>{
  return{
    ...config,
    value: '',
    validation,
    valid: !validation,
    touched: false,    
  }
}

const validateInput = (value, validation = null) =>{
  let isValid = true;

  if(!validation){
    return true;
  }

  if(validation.required){
    isValid = value.trim() !== '' && isValid;
  }

  return isValid;
}

const validateForm = (formInputs) =>{
  return !Object.keys(formInputs).some(input => {
    return formInputs[input].valid !== true;
  })
  
}

export  {inputCreator, validateInput, validateForm};