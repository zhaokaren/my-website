import React, {Component} from 'react';
import './SideBar.css';
import logo from './karen.png';
import { Link } from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (
            <div className = "SideBar">
                <div>
                <img src={logo} alt="logo" className ="logo"/>         
                </div>   
                    <Link to='/'>Home</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='contact'>Contact</Link>
                <footer>
                    <p><b>made with &hearts; by me </b></p>
                </footer>
            </div>
        );
    }
}

export default SideBar