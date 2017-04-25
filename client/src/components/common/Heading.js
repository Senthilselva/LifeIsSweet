import React, { Component } from 'react';

class Heading extends Component {
render (){
    return(
        <div className="App">
            <div className="jumbotron">        
            <h2>{this.props.heading}</h2>
            </div>
        </div>
        )
}

}

export default Heading;