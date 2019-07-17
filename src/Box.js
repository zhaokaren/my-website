import React, {Component} from 'react';
import "./Box.css"
import './PopUpExample.css'
import ReactModal from 'react-modal';



class Box extends Component{
    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }
      
      handleOpenModal () {
        this.setState({ showModal: true });
      }
      
      handleCloseModal () {
        this.setState({ showModal: false });
      }  

    render(){
        return(

            <div class="col col-lg-4 col-md-4 container" >
                <div onClick={this.handleOpenModal}>
                    <div>
                        <img className="display-photo" class="container1"src={this.props.src} alt={this.props.name}/>
                        <div class="overlay">
                            <h2>{this.props.name}</h2>
                            <div class="type-tag">
                           
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <ReactModal 
                    className="Modal"
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                <button onClick={this.handleCloseModal} type="button" class="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                    {this.props.pop}
             
                </ReactModal>
                </div>
            </div>
        
        );
    }
}

export default Box

