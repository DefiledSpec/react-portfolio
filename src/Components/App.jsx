import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import { withStyles } from '@material-ui/core/styles'

const styles = {
	root: {
		minHeight: '100vh',
		position: 'relative'
	}
}

class App extends Component {
	render() {
		const { classes } = this.props
    return (
		<div className={classes.root}>
			<Header siteName='Jesse Harrah' />
			<main>
				{ this.props.children }
			</main>
			<Footer />
			<div className="clearfix"></div>
		</div>
    );
  }
}

export default withStyles(styles)(App);
