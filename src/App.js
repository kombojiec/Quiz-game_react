import React, {Component} from 'react';
import '../src/index.css';
import Layout from './hoc/Layout';
import Quiz from './containers/Quiz';

class App extends Component {

  render(){
    return (
      
      <Layout className='layout'>
        <Quiz />
      </Layout>
    );
  }
}


export default App;
