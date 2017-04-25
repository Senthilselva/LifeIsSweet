import React, { Component } from 'react';
import logo from '../../logo.png';
class Heading extends Component {
render (){
    return(
        <div className="App">
            <div className="jumbotron">   
            <img sm={2} src={logo} className="App-logo" alt="logo" />     
            <h2>{this.props.heading}</h2>
            </div>
        </div>
        )
}

}

export default Heading;