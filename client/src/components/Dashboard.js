import '../App.css';
import React, { Component } from 'react';
import { Container, Row, Column } from 'reactstrap';
import PartnerDashboard from './dashboard/PartnerDashboard';

class Dashboard extends Component {
	
  render() {

    return (
      <div>
	      <PartnerDashboard heading="Caretaker"/>
      </div>
    );
  }
}

export default Dashboard;
