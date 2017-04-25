import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import {__downLoadFile} from '../lib/LISservice';

class DownloadFile extends Component {
	constructor(props) {
	super(props);

	this.state = {
	    file: "",
      imagePreviewUrl: '',
      name:this.props.name
	};

	    this._handleImageChange = this._handleImageChange.bind(this);
	    this._handleSubmit = this._handleSubmit.bind(this);
  	}

  	_handleSubmit(event) {
        event.preventDefault();
        console.log("CLICK");
        
        __downLoadFile(this.state.file, this.state.name)
         .then(data => {
          console.log(data);
        });
    }

    _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }


    render(){
    	return (
    		<div>
    			<form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
    		</div>
    		);
    }

}

export default DownloadFile;