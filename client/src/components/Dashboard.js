import '../App.css';
import React, { Component } from 'react';
import CaretakerView from './CaretakerView';

class Dashboard extends Component {
	
  render() {

    return (
      <div className="App">
	      {/*<ChildView />*/}
	      <CaretakerView />
      </div>
    );
  }
}

export default Dashboard;
