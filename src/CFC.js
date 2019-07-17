import React, {Component} from 'react';
import "./CFC.css";
import CFCComp from "./cfccomp.png"
import Paragraph from './Paragraph.js'
import cfc1 from './cfcpics/cfccolour.png'
import cfc2 from './cfcpics/cfcimg.png'
class PopUp2 extends Component {
render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colourcfc">
                    <div id="header-c">
                    <h1>Cafes For Change</h1>
                    <p class="GDesign">Logo Design</p>
                    </div>
                </div>
            </div>
            <div >
                <div >
                        <img src={cfc2}/>
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
                            <h3>My Role</h3>
                            <Paragraph 
                                text="I was asked to design a logo which can represent the brand as a whole, in both a casual 
                                and formal setting. I was provided the colour scheme and fonts below as branding constraints.
                                The primary purpose of this logo will be for stickers at coffee shops which offer discounts as an
                                identifier."
                            /> 
                        
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