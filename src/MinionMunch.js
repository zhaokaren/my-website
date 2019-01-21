import React, {Component} from 'react'
import Paragraph from './Paragraph'
import './MinionMunch.css'
import Minion from "./mmpics/minion.jpg"
class PopUp1 extends Component {
    render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colourmm">
                    <div id="header-c">
                    <h1>Minion Munch</h1>
                    <p class="GDesign">Graphic Design</p>
                    </div>
                </div>
            </div>
            <div class="modal-container">
                <div id="display-backgroundm">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                        <img id="mmdp" src={Minion} />
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6" id="para">
                            <h3>The Project</h3>
                            <p>The purpose of this project was to design 
                                a cereal box using photoshop with a popular cartoon/brand.</p>
                      
                        </div>

                    <div>
                    
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}


export default PopUp1 