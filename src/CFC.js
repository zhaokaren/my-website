import React, {Component} from 'react';
import "./CFC.css";
import CFCComp from "./cfccomp.png"
import Paragraph from './Paragraph.js'
import img1 from './cfcpics/cfccolour.png'
class PopUp2 extends Component {
render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colourg">
                    <div id="header-c">
                    <h1>Cafes For Change</h1>
                    <p class="GDesign">Graphic Design</p>
                    </div>
                </div>
            </div>
            <div class="modal-container">
                <div id="display-background">
                    <div>
                    
                    </div>
                </div>
                <div >
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <h3>The Brand</h3>
                            <p><b>Cafes for Change</b> is a directory of cafes in Toronto and the Greater Toronto Area that offer bring-your-own cup discounts!</p>  
                            <Paragraph 
                                title="My Role"
                                text="I was asked to design a logo which can represent the brand as a whole, in both a casual 
                                and formal setting. I was provided the colour scheme and fonts below as branding constraints.
                                The primary purpose of this logo will be for stickers at coffee shops which offer discounts as an
                                identifier."
                            /> 
                            <img src={img1}/>
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