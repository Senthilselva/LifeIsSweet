import '../App.css';
import React, { Component } from 'react';
import PartnerDashboard from './dashboard/PartnerDashboard';
import { __loadUser } from '../lib/LISservice'

class Dashboard extends Component {
  constructor(props) {
  super(props);

  this.state = {
      userData : {}
  };

    this._childview = this._childview.bind(this);
    this._partnerview = this._partnerview.bind(this);
  }

  componentDidMount() {
    __loadUser(this.props.match.params.name)
      .then(userData => { console.log(userData) });
  }

	_childview = () => (
                      <div className="App">
                          {/*<ChildView name = {this.props.match.params.name} />*/}
                          <PartnerDashboard heading="Child" name={this.props.match.params.name} />
                          {/*<PartnerDashboard heading="Caretaker"/>*/}
                      </div>
                    );


  _partnerview = () => (
                        <div className="App">
                          {/*<ChildView name = {this.props.match.params.name} />*/} 
                          <PartnerDashboard heading={this.props.match.params.name} name={this.props.match.params.name} />
                        </div>
                      );

  render() {
    console.log("child param" + typeof this.props.match.params.child)

    return (this.props.match.params.child == "true" ? this._childview() : this._partnerview() );
  }
}

export default Dashboard;
