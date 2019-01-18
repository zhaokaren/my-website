import React, { Component } from 'react';
import "./HomePage.css";
import design from "./design.png";

class HomePage extends Component {
    render(){
        return(
            <div id="body">
            <div class="rainbow">
                <div id="r1" class="strips">
                </div >
                <div id="r2" class="strips">
                </div>
                <div id="r3" class="strips">
                </div>
            </div>
                <div id="container" class="row">
                    <div class="col-sm-4">
                    </div>
                    <div id="inside" class="col-sm-4">
                    <h1>Hi, my name is <u>Karen</u></h1>
                    <p>I am currently a second year Mechanical 
                        Engineering student at the University of Toronto. 
                        My passions include graphic design, problem solving, 
                        and coffee shops.
                    </p>
                    <div>
                        <img src={design} class="homepage-display"/>
                    </div>
                    <p>
                    This website is a collection of my
                        Graphic Design and UI/UX work. During my spare time 
                        you will probably find me at some coffee shop doing work. 
                    </p>
                    </div>
                    <div class="col-sm-3">
                    </div>
                </div>
            <div class="rainbow2">
                <div id="r4" class="strips2">
                </div>
                <div id="r5" class="strips2">
                </div>
                <div id="r6" class="strips2">
                </div>
            </div>
            </div>
        )
    }
}

export default HomePage