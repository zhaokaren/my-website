import React, {Component} from 'react';
import "./Webmaster.css";
import HomeImg from "./website.png"
import img1 from "./webmasterpics/img1.jpg"
import img2 from "./webmasterpics/img2.jpg"
import Paragraph from './Paragraph.js'
import img3 from "./webmasterpics/CCandidate.png"

class PopUp2 extends Component {
render(){
        return(
            <div class="container1">
            <div>
                <div id="header-colour">
                    <div id="header-c">
                    <h1>campaigns.skule.ca</h1>
                    <p class="UDesign">UI/UX Design</p>
                    </div>
                </div>
            </div>
            <div class="modal-container">
                <div id="laptop-brackgroun">
                    <img id="laptop" src={HomeImg}/>
                </div>
                <div >
                    <div class="row">
                        <div class="col-lg-3 col-md-2 col-sm-1">
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-10">
                            <div id="part1">
                                <h3>The Project</h3>
                                <p>
                                
                                I was tasked with designing a website/platform for the University of Toronto Engineering Society to 
                                use during the campaigning period. The purpose of this website is to augment the campaign process to 
                                allow for all candidates to have an equal platform.

                                </p>
                                <span> </span>
                                <p>
                                    <b>3 Different Users to Design for: </b><br></br>
                                    <ul>
                                        <li><b>Voter</b> - the user will be navigating the site to gain information about candidates</li>
                                        <li><b>Candidate</b> - the user will need to be able to update their own individual profile page</li>
                                        <li><b>CRO/DRO (Admin)</b> - the user will need to be able to oversee all candidates and the election</li>
                                    </ul>

                                </p>
                                <p>
                                    <b>Key Requirements (given by my supervisor):</b>
                                    <ul>
                                        <li>Easy navigation between different campaigns and candidates </li>
                                        <li>
                                        A Candidate should have a portal through which they can:
                                        <ul>
                                            <li>post multimedia updates to their feed</li>
                                            <li> Update all their information (including)</li>
                                                <ul>
                                                    <li>Graduating Year</li> 
                                                    <li>Discipline</li> 
                                                    <li>Link to Facebook campaign</li> 
                                                    <li>Photo</li> 
                                                    <li>Relevant past experiences</li> 
                                                    <li>A written voter profile</li> 
                                                </ul>
                                        </ul>
                                        </li>
                                        <li>A Voter should have a positive, clean, workless experience viewing a Candidate’s profile, 
                                            that includes the above information as well as a history of violations they committed, which should be clear and evident
                                        </li>
                                    </ul>

                                </p>
                            </div>
                            <div id="part2">
                                <h3>The Design Process</h3>
                                <p>I started the design process with rough wire-framing to brainstrom different layouts to display information. I focussed first on the 2 main components, the Candidate Profile and the website layout/navigation. </p>
                               
                                <p><b>Candidate Profile</b></p>
                                <p>Each Candidate profile required a lot of information to be displayed. In addition to static information, there will also be a "feed" which candidates are able to update to create a centralized campaigning space.</p>
                                <img src={img1}/>
                                
                                <table id="tablecomp">
                                    <tr>
                                        <th>Design #1</th>
                                        <th>Design #2</th>
                                        <th>Design #3</th>
                                    </tr>
                                    <tr>
                                        <td>This design took a vertical approach of displaying the information, which wasn't very effective as you needed further navigation to view the voter profile</td>
                                        <td>This design is a better use of space in terms of display and allowed for more space to navigate the feed</td>
                                        <td>This design is different from the first and second as it has a space for the voter profile all in one display.</td>
                                    </tr>
                                </table>
                                <br></br>
                                <p><b>Navigation Flow</b></p>
                                <p>A key requirement of this project was for a way of easy navigation between Campaigns and Candidates. Below were few ideas of site layout/naviation, taking inspiration from existing websites like (courses.skule.ca)</p>
                                <img src={img2}/>
                                <Paragraph
                                    title="Design Decisions Made"
                                    text="I opted for a grid view of all the positions as, it provided a familiar way of navigation, easier to read, 
                                            and space efficient in comparison to doing a list of all the positions. When navigating each of the positions, 
                                            there were 2 options available. Route one was suggested as an initial starting point for the website, but it took 
                                            up too much space, which doesn't allow for (equal space for everyone). Alternately, the individual campagin page will 
                                            continue to use the same grid system to display all of the candidates which are running for the position. I opted for 
                                            no picture on the main campaign page as it could create potential biases against other candidates."
                                    text1="On the campaign page, I opted for no back button, as it required more navigation for the user. Instead I placed a hidden sidebar
                                            in the top left corner as a cue for naviation, since it is a commonly used element. Upon clicking a full list of positions will 
                                            show. "
                                />
                                <Paragraph
                                    title="Following Steps"
                                    text="After selecting the flow and layout of the Voter website, I then procceded to take components from this site and implement them
                                    for the Candidate and Admin side of the site."
                                />
                            </div>
                            <div id="part3">
                                <h3>The Designs</h3>
                            </div>
                            <Paragraph
                                title="Campaigner User Interface"
                            />
                            <img src={img3}/>
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