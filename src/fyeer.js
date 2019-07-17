import React, {Component} from 'react';
import "./fyeer.css";
import Paragraph from './Paragraph.js'
import FY from './fyeer-06.png'


class PopUp2 extends Component {
render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colourcfc">
                    <div id="header-c">
                    <h1>FYEER</h1>
                    <p class="GDesign">Logo Design</p>
                    </div>
                </div>
            </div>
            <div >
            <div class="row">
                        <div class="col-lg-1 col-md-2 col-sm-1">
                        </div>
                        <div class="col-lg-10 col-md-8 col-sm-10">
                            <img id="fy" src={FY}/>
                        </div>
                
                        <div class="col-lg-1 col-md-2 col-sm-1">
                        </div>
                    </div>
                <div >
                    </div>
                    <div class="bottom">
                    </div>
                </div>
            </div>
        );
    }
}

export default PopUp2