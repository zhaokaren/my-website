import React, {Component} from 'react'
import './AboutMe.css'
import Logo1 from './mini-logos/mini-logo-05.png'
import Logo2 from './mini-logos/mini-logo-07.png'
import Logo3 from './mini-logos/mini-logo-06.png'
import pic from "./pp.png"

class AboutMe extends Component {
    render(){
        return(
            <div id="body-1">
                <div id="mee">
                <span id="underline">About Me</span>
                <div class="row" id="me-container">
                    <div class="col-lg-3 col-md-3">
                    </div>
                    <div class="col-lg-6 col-md-6">
                        <p id="meme">
                        I am currently in my second year studying Mechanical 
Engineering at the University of Toronto. During my spare time, I enjoy reading about technology and design, and catching up with friends over coffee. Below are a few things about me that I hope can help you get to know me a little better!
                        </p>
                    </div>
                    <div class="col-lg-3 col-md-3">
                    </div>
                </div>
                <hr/>
                <div >
                <div>
                    <h3>I am someone who ...</h3>
                </div>
            
                <div class="row mini-logo" > 
                        <div class="col-lg-4 col-md-4 tap" >
                            <img class="mini-log" id="r" src={Logo1}/>
                        </div>
                        <div class="col-lg-4 col-md-4 tap">
                            <img class="mini-log" src={Logo2}/>
                        </div>
                        <div class="col-lg-4 col-md-4 tap">
                            <img class="mini-log" id="l" src={Logo3}/>
                        </div>
                </div>
                </div>
            </div>
        </div>

        )
    }
}

export default AboutMe
