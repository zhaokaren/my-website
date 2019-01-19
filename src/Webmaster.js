import React, {Component} from 'react';
import "./Webmaster.css";
import HomeImg from "./website.png"

class PopUp2 extends Component {
render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colour">
                    <div id="header-c">
                    <h1>campaigns.skule.ca</h1>
                    <p class="UDesign">UI/UX Design</p>
                    </div>
                </div>
            </div>
            <div class="modal-container">
                <div id="display-background">
                    <div>
                    <img class="dp"src={HomeImg}/>
                    </div>
                </div>
                <div >
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <h3>The Project</h3>
                            <p>
                            
                                I was tasked with designing a website/platform for the University of Toronto Engineering Society to use during the Campaigning period. The purpose of this website is to augment the campaign process to allow for all candidates to have an equal platform.
                            </p>
                            <span> </span>
                            <p>
                                3 Different Users to Design for: <br></br>
                                Voter - the user will be navigating the site to gain information about candidates <br></br>
                                Candidate - the user will need to be able to update their own individual profile page <br></br>
                                CRO/DRO (Admin) - the user will need to be able to oversee all candidates and the election

                            </p>
                    </div>
                    <div class="col-lg-3 col-md-2 col-sm-1">
                    </div>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default PopUp2