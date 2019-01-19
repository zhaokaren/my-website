import React, {Component} from 'react';
import "./Webmaster.css";
import HomeImg from "./website.png"

class PopUp2 extends Component {
render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colour">
                    <h1>campaigns.skule.ca</h1>
                    <p class="UDesign">UI/UX Design</p>
                </div>
            </div>
            <div class="container">
                <div>
                    <img class="dp"src={HomeImg}/>
                </div>
                <div>
                    <p>
                        Cafes For Change is a not-for-profit organization which aims to encourage local coffee shops in toronto to take offer incentives for customers who bring their own cups. I was asked to design the logo.
                    </p>
                </div>
            </div>
            </div>
        );
    }
}

export default PopUp2