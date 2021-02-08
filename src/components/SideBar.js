import  {Component} from 'react';
import Cover from './Cover';
const links = ['link 1', 'link 2', 'link 3', 'link 4', 'link 5']

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
                  <a href='##' className='side-bar__link'>{link}</a>
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

