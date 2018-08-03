import React, { Component } from 'react'
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core'
import {withStyles} from '@material-ui/core/styles'

const styles = {
	root: {
	  flexGrow: 1,
	},
	flex: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginLeft: -12,
	  marginRight: 20,
	},
	appBar: {
		background: '#24292e'
	}
}

class Header extends Component {
	render() {
		const { classes, siteName } = this.props
		return (
			<header className={classes.root}>
				<AppBar position='static' className={classes.appBar}>
					<Toolbar>
						<Typography variant='title' color='inherit' className={classes.flex}>
							{siteName}
						</Typography>
						<Button color='inherit' href='/'>About</Button>
						<Button color='inherit' href='/'>Resume</Button>
						<Button color='inherit' href='/projects'>Projects</Button>
						<Button color='inherit' href='/contact'>Contact Me</Button>
					</Toolbar>
				</AppBar>
				{/* <h2 className={`title`}>Jesse Harrah</h2>
				<Icon icon={`menu`} iconClass='nav-icon'/>
				<div className="clearfix"></div> */}

			</header>
		)
	}
}

export default withStyles(styles)(Header)
