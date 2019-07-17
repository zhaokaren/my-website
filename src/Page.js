import React, {Component} from 'react';
import "./Page.css";
import Box from "./Box.js";
import CFC from "./cfc.png";
import MM from "./mmpics/mmdisplay.jpg";
import FW from "./FW.jpg";
import WB from "./web.png"
import WM from "./WomensDay/WD.jpg"
import SR from "./shareceipt.jpg"
import OM from "./omicron/OM-01.jpg"
import FY from './logo-cover/FYEER.png'
import IF from './logo-cover/infograph.png'
import PopUp2 from './CFC.js'
import PopUp4 from './MinionMunch.js'
import PopUp5 from './WomensDay/WomensDay.js'
import PopUp6 from './OM.js'
import PopUp8 from './fyeer.js'
import UT from './makeuoft/makeuoft.jpg'
import CF from './caffiends/caffiends-cover.jpg'
import Bday from './Birthday/bdaycard.jpg'
import Photo2 from './Photo2.js'

class Page extends Component {
    render(){
        return(
            <div id="body1">
            <h1 style={{padding:'15px'}} className='header'>Projects + Portfolio</h1>
                <div class="row rows" >
                    <Photo2 
                        photo={UT}
                    />
                    <Box 
                        src={CF}
                        name="Cafes for Change"
                        type="Logo Design"
                        pop={<PopUp2/>}

                    />
                    <Box 
                        src={Bday}
                        name="Birthday Card Concept"
                        type="Graphic Design"
                        pop={<PopUp5/>}

                    />
                    
                </div>
                <div class="row rows" >
                    <Box 
             
                        src={MM}
                        name="Minion Munch"
                        type="Graphic Design"
                        pop={<PopUp4/>}

                    />
                    <Box 
                        src={CFC}
                        name="Cafes for Change"
                        type="Logo Design"
                        pop={<PopUp2/>}

                    />
                    <Box 
                        src={WM}
                        name="International Women's Day"
                        type="Graphic Design"
                        pop={<PopUp5/>}

                    />
                    
                </div>
                <div class="row rows" >

                    <Box
                        src={OM}
                        name="Omicron"
                        type="UI Design"
                        pop={<PopUp6/>}

                    />
                    <Box
                        src={FY}
                        name="FYEER"
                        type="Logo Design"
                        pop={<PopUp8/>}

                    />
                     <Box
                        src={IF}
                        name="Infographic Posters"
                        type="Logo Design"
                        pop={<PopUp6/>}

                    />
                    </div>


               
           
            </div>
            
        );
    }
}
export default Page;