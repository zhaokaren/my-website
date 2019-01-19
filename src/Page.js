import React, {Component} from 'react';
import "./Page.css";
import Box from "./Box.js";
import CFC from "./cfc.png";
import MM from "./minionmunch.jpg";
import FW from "./froshsticker.png";
import WB from "./web.png"
import PopUp3 from './Webmaster.js'

class Page extends Component {
    render(){
        return(
            <div id="body1">
            <h1 style={{padding:'15px'}} className='header'>Projects + Portfolio</h1>
                <div class="row" class="row-block">
                    <Box 
             
                        src={MM}
                        name="Minion Munch"
                        type="Graphic Design"
                    />
                    <Box 
                        src={CFC}
                        name = "Cafes for Change"
                        type="Graphic Design"
                    />
                    <Box 
                        src={FW}
                        name ="Frosh Week"
                        type="Graphic Design"
                    /> 
                    <Box
                        src={WB}
                        name="campaigns.skule.ca"
                        type="UI/UX"
                    
                    />
                </div>
    
            </div>
            
        );
    }
}
export default Page;