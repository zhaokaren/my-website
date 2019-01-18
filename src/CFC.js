import React, {Component} from 'react';
import "./CFC.css";
import CFCComp from "./cfccomp.png"
class PopUp2 extends Component {
render(){
        return(
            <div class="container1">
            <div id = "pop-up">
                <div id="pop-up-text">
                    <h1>CAFES FOR CHANGE</h1>
                    <p>Graphic Design</p>
                </div>
            </div>
            <div class="container">
                <div>
                    <img class="dp"src={CFCComp}/>
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