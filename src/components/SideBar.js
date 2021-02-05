import react, {Component} from 'react';
const links = ['link 1', 'link 2', 'link 3', 'link 4', 'link 5']
class SideBar extends Component{
  state = {
    hidden: false,
  }

  toggleSideBar = () =>{
    this.setState({hidden: !this.state.hidden})
  }

  render(){
    return(

      <nav className={`side-bar ${this.state.hidden? 'side-bar_visible': 'side-bar_hidden'}`}>
        <button type='button'
          className={`side-bar__button `}
          onClick={this.toggleSideBar}>
          {this.state.hidden?<i className="fas fa-times"></i>: <i className="fas fa-bars"></i>}                
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
      
    )
  }
}

export default SideBar;

{/* <button type='button'
        className={`side-bar__button ${this.state.hidden? 'side-bar_visible': 'side-bar_hidden'}`}
        onClick={this.toggleSideBar}>
        {this.state.hidden?<i class="fas fa-times"></i>: <i class="fas fa-bars"></i>}                
      </button> */}