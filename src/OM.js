import React, {Component} from 'react';
import "./OM.css";
import Paragraph from './Paragraph.js'
import OM from './omicron/OM-01.jpg'
import OM1 from './omd1.png'
import OM2 from './omd2.png'
import OM3 from './omd3.png'

class PopUp2 extends Component {
render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colourcfc">
                    <div id="header-c">
                    <h1>Omicron</h1>
                    <p class="GDesign">UI Design</p>
                    </div>
                </div>
            </div>
            <div >
                <div >
                        <img id="om" src={OM}/>
                    <div>
                    
                    </div>
                </div>
                <div >
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <h3>The Project</h3>
                            <p>Website User Interface re-design with simple changes to create a more effective platform.</p>  
                            <h3>The Screens</h3>
                        </div>
                
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-1 col-md-1 col-sm-1">
                        </div>
                        <div class="col-lg-10 col-md-10 col-sm-10">
                        <img src={OM2}/>
                        <img src={OM1}/>
                        <img src={OM3}/>
                        <div class="col-lg-1 col-md-1 col-sm-1">
                        </div>
                    </div>
                    <div class="bottom">
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default PopUp2