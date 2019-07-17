import React, {Component} from 'react'
import Exit from './x.png'
import './PopUp2.css'
import Make from './MakeUofT.png'
import Colour from './makeuoft/colourscheme.jpg'
import { Link } from 'react-router-dom';

class PopUp2 extends Component{
    render(){
        return(
            <div className="popup">
                <title>MakeUofT</title>
                <div className="scroll">
                    <div className="photo">
                        <img src={Make} className="repsonsive"/>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                          
                        </div>

                        <div class="col-lg-6 col-md-6 col-sm-6 description">
                      
                            <img className="back-button" src={Exit}/>
                            
                            <div className="description-text">
                            <h1 className="title">
                                Visual Re-Design <br></br>+ Checkout Process Design
                            </h1>
                            <br/>
                            
                            <div className="body-description">
                            <p className = "body-text">
                                <b>My Role:</b> Responsible for all UI/UX Design relating to the needs of the Hackathon Site. 
                            </p>
                            <p className = "body-text">
                                <b>The Problem:</b> Previous branding does not optimize user engagement and external hardware checkout systems do not support the needs of the event.  
                            </p>
                            </div >
                                <div className="body-description2">
                                    <h3>The Project:</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                        <div className="body-1 row"> 
                        <div className="col-lg-2"></div>
                            <div class="subtitle-1 col-lg-8">
                                <h2>HACKATHON HOMEPAGE RE-DESIGN</h2>
                                <p>For the 2019 - 2020 year, I was given full creative freedom to re-design the Main website. In previous year, isometric drawings were used, but I wanted to bring a new vibe into the mix, to engage hackers, designers, and coders. A more modern take on hardware mixed with</p>
                            
                               
                                <img src={Colour}/>
                            </div>
                        <div className="col-lg-2"></div>
                        </div>
                </div>
            </div>
     
        )
    }
}

export default PopUp2;