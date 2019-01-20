import React, {Component} from 'react'

class Paragraph extends Component {
    render(){
        return(
            <div>
                <p><b>{this.props.title}</b></p>
                <p>{this.props.text}</p>
                <p>{this.props.text1}</p>
            </div>
        )
    }
}

export default Paragraph