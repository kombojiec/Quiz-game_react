import  {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Cover from './Cover';

const links = [
  {
    path: '/',
    name: 'Список',
    exact: true
  },
  {
    path: '/auth',
    name: 'Авторизация',
    exact: false
  },
  {
    path: '/quiz-creator',
    name: 'Создать',
    exact: false
  },
]

class SideBar extends Component{
  state = {
    hidden: true,
  }

  toggleSideBar = () =>{
    this.setState({hidden: !this.state.hidden})    
  }

  closeSideBar = () => {
    this.setState({hidden: true})
  } 
  
  render(){
    return(
      <>
        {!this.state.hidden? <Cover onClickClose={this.closeSideBar} />: null} 
        <nav className={`side-bar ${!this.state.hidden? 'side-bar_visible': 'side-bar_hidden'}`}>
          <button type='button'
            className={`side-bar__button `}
            onClick={this.toggleSideBar}>
            {!this.state.hidden?<i className="fas fa-times"></i>: <i className="fas fa-bars"></i>}                
          </button>
          <ul className='side-bar__list'>
            {links.map((link, index) => {
              return(
                <li key={index} className="side-bar__item">
                  <NavLink to={link.path} exact={link.exact} className='side-bar__link' onClick={this.closeSideBar} > {link.name} </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </>
      
    )
  }
}

export default SideBar;

