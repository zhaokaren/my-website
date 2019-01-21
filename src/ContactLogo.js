import React, {Component} from 'react';
import './ContactLogo.css'


class ContactLogo extends Component {
    render(){
        return(
            <div class="logo-container">
                <img src={this.props.src} alt={this.props.name} id="logo"></img>

            </div>
        );
    }
}

export default ContactLogo