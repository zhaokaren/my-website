import React, {Component} from 'react';
import "./Page.css";
import Box from "./Box.js";
import CFC from "./cfc.png";
import MM from "./mmpics/mmdisplay.jpg";
import FW from "./froshsticker.png";
import WB from "./web.png"
import PopUp2 from './CFC.js'
import PopUp3 from './Webmaster.js'
import PopUp1 from './FroshWeek.js'
import PopUp4 from './MinionMunch.js'

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
                        pop={<PopUp4/>}

                    />
                    <Box 
                        src={CFC}
                        name = "Cafes for Change"
                        type="Graphic Design"
                        pop={<PopUp2/>}

                    />
                    <Box 
                        src={FW}
                        name ="Frosh Week"
                        type="Graphic Design"
                        pop="Coming Soon"                        
                    /> 
                    <Box
                        src={WB}
                        name="campaigns.skule.ca"
                        type="UI/UX"
                        pop={<PopUp3/>}
                    
                    />
                </div>
    
            </div>
            
        );
    }
}
export default Page;