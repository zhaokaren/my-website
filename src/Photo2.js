import React, {Component} from 'react';
import PopUp2 from './PopUp2.js'
import './Photo2.css'
import { Link } from 'react-router-dom';



class Photo extends Component {
   constructor(){
       super();
       this.state = {
           showPopup: false
       };
   } 
   togglePopup() {
       this.setState({
           showPopup: !this.state.showPopup
       });
   }

    render(){
        return(
            <div className="photos col-lg-6">
            <div >
            <Link to='/MakeUofT'>
                <img  className="display-cube" id={this.props.name} src={this.props.photo} onClick={this.togglePopup.bind(this)}></img>
            </Link>
            <h3 className="display-title">MakeUofT</h3>
            <p>UI/UX + Product Design</p>
            </div>

                
          </div>
        )
    }

}

export default Photo;
