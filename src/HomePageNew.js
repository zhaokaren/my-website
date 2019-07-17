import React, { Component } from 'react';
import "./HomePageNew.css";
import pic from "./pp.png"
import L1 from "./logos/re-design-03.svg"
import L2 from "./logos/re-design-04.svg"
import L3 from "./logos/re-design-06.svg"
import L4 from "./logos/re-design-05.svg"
import Project from './Project.js'
import Page from './Page.js'
import {$,jQuery} from 'jquery';
import arrow from './arrow.png'

class HomePage extends Component {
    state = {
        color: 'black'
      }
    
      listenScrollEvent = e => {
        if (window.scrollY > 0) {
          this.setState({color: 'grey'})
        } else {
          this.setState({color: 'black'})
        }
      }
    
      componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
      }
    
    render(){
        return(
            <div>
                <div id="body1" class="row">
                    <div class="col-lg-3 col-md-3 col-sm-1">
                    </div> 
                    <div class="col-lg-6 col-md-6 col-sm-10 body-cont">
                    <img src={pic} id="profilepic"/>
                    <h1 style={{color: this.state.color}}>Hi , I’m Karen!
                    <br></br>I am a Industrial Engineering student with a passion for Design ✨.
                    </h1>
                    <h3>
                        I love understanding the way things work, and my goal is to use design as a tool to help improve lives. 
                    </h3>
                    <div class="row" id="contacts">
                        <div class="col-lg-3 col-md-3 col-sm-3 col-3 logos" target="_blank">
                        <a href="mailto:karen.zhao@mail.utoronto.ca">
                            <img src={L1}/>      
                        </a>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-3 logos">
                        <a href="https://www.linkedin.com/in/karenjyzhao/" target="_blank">
                            <img src={L2}/>
                        </a>    
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-3 logos" target="_blank">
                            <img src={L3}/>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-3 col-3 logos " target="_blank">
                        <a href="https://github.com/zhaokaren">
                            <img src={L4}/>
                        </a>  
                        </div>
                    </div>
                    <p className="arrow-text"><img className="arrow" src={arrow}/> Scroll to learn more!</p>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-1">
                    </div> 
        
                </div>
                <Page/>
            </div>
        )
    }
}

export default HomePage

