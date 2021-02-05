import React, {Component} from 'react';
import SideBar from '../components/SideBar';
import '../index.css';

export default class Layout extends Component{

  render(){
  return(
    <div className="page">
      <header></header>
      <main className='main'>
        <SideBar />
        {this.props.children}
      </main>
      <footer></footer>
    </div>
  )
  }
}