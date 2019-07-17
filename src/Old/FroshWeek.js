import React, {Component} from 'react'
import Paragraph from './Paragraph'
import './FroshWeek.css'
import FWimg from './frosh.png'
import FWimg2 from './fwimg.png'
import FWimg3 from './fwimg2.png'
import FWimg4 from './fwimg4.png'
import FWimg5 from './scfilter.jpg'

class PopUp1 extends Component {
    render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colourfw">
                    <div id="header-c">
                    <h1>Frosh Week</h1>
                    <p class="GDesign">Graphic Design</p>
                    </div>
                </div>
            </div>
            <div >
                <div id="dpfw">
                        <img class="dpfw" src={FWimg} />
                    <div>
                    
                    </div>
                </div>
                <div >
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <h3>My Role</h3>
                            <Paragraph 
                             
                                text="F!rosh Week is the University of Toronto's Orientation Week. 
                                Last summer, I was one of the co-chairs for the Graphics Sucomittee.
                                My role was responsible of designing all the graphics relating back to 
                                Orientation Week. We designed a variety of things including T-Shirt designs,
                                Sponsorship Packages, SnapChat Filter, Profile Picture Branding, Patch Design
                                and additional marketing material. Below are some of the graphics I designed 
                                last summer!"
                            /> 
                            <h3>Branding Guidelines</h3>
                            <Paragraph
        
                                text="One of the largest constraints I dealt with for this role was the branding 
                                guidlines. We were allowed to only work with 3 main colours, purple, grey and yellow.
                                In addition to the colour restrictions, majority of our graphics had to relate to spy imagery
                                as orientation week were to be branded with spies."
                            />
                                <img src={FWimg2}/>
                            <h3>T-Shirt Logos</h3>
                            <div class="row">
                                <div class="col-lg-6"><img src={FWimg3}/></div>
                                <div class="col-lg-6"><img src={FWimg4}/></div>
                            </div>
                            <h3>Snapchat Filter</h3>
                            <div class="row">
                                <div class="col-lg-3"></div>
                                <div class="col-lg-6"><img src={FWimg5}/></div>
                                <div class="col-lg-3"></div>
                            </div>

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


export default PopUp1 