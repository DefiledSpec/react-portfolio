import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

const styles = {
	root: {
		maxWidth: '960px',
		margin: '2.5em auto 5em auto',
		padding: '1em 2em',
	},
	pdf: {
		display: 'block',
		width: '100%',
		height: '80vh'
	},
	display1: {

	}
}

class Resume extends Component {
	state = {
		pdfLink: './assets/docs/Resume.pdf'
	}
	render() { 
		const { root, pdf, display1 } = this.props.classes
		const { pdfLink } = this.state
		return (
			<Paper className={root}>
				<Typography variant='display1' gutterBottom align='center' component='h1' className={display1}></Typography> 
				<iframe className={pdf} src="./assets/docs/Resume.pdf" />
			</Paper>
		)
	}
}
 
export default withStyles(styles)(Resume)