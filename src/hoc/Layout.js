import React, {Component} from 'react';
import '../index.css';

export default class Layout extends Component{

 render(){
  return(
   <div className="page">
    <header></header>
    <main className='main'>
     {this.props.children}
    </main>
    <footer></footer>
   </div>
  )
 }
}