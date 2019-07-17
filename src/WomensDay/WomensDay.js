import React, {Component} from 'react';
import "./WomensDay.css";
import WDP1 from "./WD_Poster-01.jpg"
import WDP2 from "./WD_Poster-02.jpg"
class PopUp2 extends Component {
render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colourWD">
                    <div id="header-WD">
                    <h1>International Women's Day</h1>
                    <p class="GDesign">Graphic Design</p>
                    </div>
                </div>
            </div>
            <div >
                <div class="col-lg-6 col-md-12 col-sm-12">
                        <img src={WDP1}/>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <img src={WDP2}/>
                </div>
                <div >
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <h3>The Purpose</h3>
                            <p>This year for International Women's Day I deseigned a poster for women in STEM. I tried to reimaging the venus symbol with Engineering Disciplines. </p>  
                        </div>
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                    </div>
                    <div class="bottom">
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default PopUp2