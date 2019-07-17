import React, {Component} from 'react'
import Paragraph from './Paragraph'
import './Shareceipt.css'
import SR from './shareceipt.jpg'
import SR1 from './shareceipt/Screens-01.jpg'
import SR2 from './shareceipt/Screens-02.jpg'
import SR3 from './shareceipt/Screens-03.jpg'
import SR4 from './shareceipt/Screens-04.jpg'
import SR5 from './shareceipt/Screens-05.jpg'



class PopUp1 extends Component {
    render(){
        return(
            <div class="container1">
            <div>
                <div id="header-coloursr">
                    <div id="header-c">
                    <h1>Shareceipt</h1>
                    <p class="GDesign">UI/UX Design</p>
                    </div>
                </div>
            </div>
            <div >
                <div id="dpfw">
                        <img class="dpfw" src={SR} />
                    <div>
                    
                    </div>
                </div>
                <div >
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <h3>The Project</h3>
                            <p>The idea behind this web application is that we found that in general, 
                                it is very difficult for resturnats to split bills, and sometimes don't 
                                accomadate for larger parties. So an alternative, we thought why not one 
                                person pay, then bill their friends what they ate after. For this product I design 
                                a simple 5 step process to make navigation as simple as possible.</p>
                        </div>
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                        </div>
                        <div class="row">
                        <div class="col-lg-2 col-md-2 col-sm-1">
                        </div>
                        <div class="col-lg-8 col-md-8 col-sm-10">
                            <img class="SR-photo" src={SR1}/>
                            <img class="SR-photo" src={SR2}/>
                            <img class="SR-photo" src={SR3}/>
                            <img class="SR-photo" src={SR4}/>
                            <img class="SR-photo" src={SR5}/>
                        </div>
                        <div class="col-lg-2 col-md-2 col-sm-1">
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}


export default PopUp1 