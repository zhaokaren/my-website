import React, {Component} from 'react';
import './SideBar.css';
import logo from './simple-logo.png';
import { Link } from 'react-router-dom';

class SideBar extends Component {

    state = {
        opacity: '0',
      }
    
      listenScrollEvent = e => {
        if (window.scrollY > 500) {
          this.setState({opacity: '1'})
        } else {
          this.setState({opacity: '0'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }

    render() {
        return (
            <div className = "SideBar" style={{opacity: this.state.opacity}}>
                <div>
                <img src={logo} alt="logo" className ="logo"/>         
                </div>   
                <div id="sidebar-container">
                    <Link  to='/'>Home</Link>
                    <Link to='/aboutme'>About Me</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                </div>
                <footer>
                    <p><b>made with &hearts; by me </b></p>
                </footer>
            </div>
        );
    }
}

export default SideBar