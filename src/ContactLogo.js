import React, {Component} from 'react';
import './ContactLogo.css'


class ContactLogo extends Component {
    render(){
        return(
            <div class="logo-container">
                <a href={this.props.link}>
                <img src={this.props.src} alt={this.props.name} id="logo"></img>
                </a>

            </div>
        );
    }
}

export default ContactLogo