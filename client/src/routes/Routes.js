import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import Nav from '../components/Nav'
import App from '../App'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'
import Dashboard from '../components/Dashboard'

const Routes= (props) => (
<Router>
	<div>
		<Nav />
		<Route exact path="/" component={App} />
		<Route path="/signup" component={SignUp} />
		<Route path="/signin" component={SignIn} />
		<Route path="/dashboard" component={Dashboard} />
	</div>
</Router>
)

export default Routes;