import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import App from './Components/App'

export default (
	<Router history={''}>
		<div className={`App`}>
			<Route exact path='/' render={() => (<App children={(<Home />)} />)} />
			<Route exact path='/projects' render={() => (<App children={(<Projects />)} />)} />
			<Route exact path='/contact' render={() => (<App children={(<Contact />)} />)} />
			{/* <Route path='/contact' render={() => (<App children={(<Home />)} />)} /> */}
		</div>
	</Router>
)
