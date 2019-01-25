import React, { Component } from 'react';
import "./HomePage.css";
import coffee from "./coffee.png"
import design from "./design.png";
import think from './thinking.png'
import $ from 'jquery'; 
class HomePage extends Component {
    render(){
        return(
            <div id="body">
            <div class="rainbow">
                <div id="r1" class="strips">
                </div >
                <div id="r2" class="strips">
                </div>
                <div id="r3" class="strips">
                </div>
            </div>
                <div id="container" class="row">
                    <div class="col-sm-4">
                    </div>
                    <div id="inside" class="col-sm-4">
                    <h1>Hi, my name is <u>Karen</u></h1>
                    <p>I am currently a second year Mechanical 
                        Engineering student at the University of Toronto. 
                        My passions include <span class="hover-enlarge" id="one"> graphic design</span>, <span id="two" class="hover-enlarge" >problem solving</span>, 
                        and <span id="three" class="hover-enlarge" >coffee shops</span>.
                    </p>
                    <div class="row">
                        <div class="col-lg-4">
                            <img src={design} class="homepage-display" id="onee"/>
                        </div>
                        <div class="col-lg-4">
                            <img src={think} class="homepage-display" id="twoo"/>
                        </div>
                        <div class="col-lg-4">
                            <img src={coffee} class="homepage-display" id="threee"/>
                        </div>
                        
                    </div>
                    <p>
                    This website is a collection of my
                        Graphic Design and UI/UX work. During my spare time 
                        you will probably find me at some coffee shop doing work. 
                    </p>
                    </div>
                    <div class="col-sm-3">
                    </div>
                </div>
            <div class="rainbow2">
                <div id="r4" class="strips2">
                </div>
                <div id="r5" class="strips2">
                </div>
                <div id="r6" class="strips2">
                </div>
                <div id="r7" class="strips2">
                </div>
            </div>
            </div>
        )
    }
}

export default HomePage

$(document).ready(function() {
    
    $( "#one" ).hover
        (function() {
        $("#onee").addClass('hover');}, 
        function() {
        $("#onee").removeClass('hover');}
        );
    
    $("#two").hover
        (function() {
        $("#twoo").addClass('hover');}, 
        function() {
        $("#twoo").removeClass('hover');}
        );
    
    $("#three").hover
        (function() {
        $("#threee").addClass('hover');}, 
        function() {
        $("#threee").removeClass('hover');}
        );
    

    
    });