import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import '../src/index.css';
import Layout from './hoc/Layout';
import Quiz from './containers/Quiz';
import Auth from './components/Auth';
import QuizCreator from './components/QuizCreator';
import QuizList from './components/QuizList';


class App extends Component {

  render(){
    return (
      
      <Layout className='layout'>
        <Switch>
          <Route path={'/auth'} component={Auth} />
          <Route path={'/quiz-creator'} component={QuizCreator} />
          <Route path={'/quiz/:id'} component={Quiz} />
          <Route path={'/'} component={QuizList} />
        </Switch>
      </Layout>
    );
  }
}


export default App;
