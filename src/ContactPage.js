import React, {Component} from 'react'
import './ContactPage.css'
import Logo1 from './LinkedIn.png'
import Logo2 from './Mail.png'
import ContactLogo from './ContactLogo.js'
import Logo3 from './Github.png'

class ContactPage extends Component {
    render(){
        return(
            <div id="body">
                <div style={{textAlign:'center'}} class="container">
                <h1 style={{padding:'14px'}}>lets get in touch!</h1>
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
                                <ContactLogo
                                    src={Logo2}
                                    name="Email"
                                    link="mailto:karen.zhao@mail.utoronto.ca"
                                />
                            </td>
                            <td>
                                <ContactLogo
                                    src={Logo1}
                                    name="LinkedIn"
                                    link="linkedin.com/in/karenjyzhao"
                                />
                            </td>
                            <td>
                                <ContactLogo
                                    src={Logo3}
                                    name="Github"
                                    link="https://github.com/zhaokaren"
                                />
                            </td>
                        </tr>
  
                    </table>
                    </div>
                </div>
                
            </div>

        )
    }
}

export default ContactPage