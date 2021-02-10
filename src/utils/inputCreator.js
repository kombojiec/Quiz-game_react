
const inputCreator = (config, validation) =>{
  return{
    ...config,
    value: '',
    validation,
    valid: !validation,
    touched: false,    
  }
}

export default inputCreator;