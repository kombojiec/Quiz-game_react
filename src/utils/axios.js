import axios from 'axios';

const Axios = axios.create({
  baseURL: 'https://programers-quiz-default-rtdb.firebaseio.com/'
})

export default Axios;