import '../App.css';
import React, { Component } from 'react';
import PartnerDashboard from './dashboard/PartnerDashboard';

class Dashboard extends Component {
	
  render() {

    return (
      <div className="App">
	      {/*<ChildView />*/}
	      <PartnerDashboard heading="Caretaker"/>
      </div>
    );
  }
}

export default Dashboard;
