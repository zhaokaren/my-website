import React, {Component} from 'react'
import './ContactPage.css'
import Logo1 from './LinkedIn.png'
import Logo2 from './Mail.png'

class ContactPage extends Component {
    render(){
        return(
            <div id="body">
                <div style={{textAlign:'center'}} class="container">
                <h1 style={{padding:'15px'}}>where to find me!</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <div className="Display">
                    <div class="cont">
                    <table>
                        <tr>
                            <td>
                                <div className="LinkContainer"><a className="logoimg" href="http://linkedin.com/in/karenjyzhao"><img src={Logo1}/></a></div>
                            </td>
                            <td>
                                <div className="LinkContainer"><img className="logoimg" src={Logo2}/></div>
                            </td>
                        </tr>
                        <tr>
                            <td>LinkedIn</td>
                            <td>Email</td>
                            <td>Some random Coffee Shop</td>
                        </tr>
                   
                    </table>
                    </div>
                </div>
                
            </div>

        )
    }
}

export default ContactPage