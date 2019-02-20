import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
// import { toUnicode } from 'punycode';

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
		padding: '.55em',
		margin: '0 auto .75em auto',
		width: '80%',
		color: '#24292e',
		borderBottom: '#24292e solid .5px'
	},
}

class Resume extends Component {
	// state = {
	// 	pdfLink: './assets/docs/Resume.pdf'
	// }
	render() { 
		const { root, pdf, display1 } = this.props.classes
		// const { pdfLink } = this.state
		return (
			<Paper className={root}>
				<Typography variant='display1' gutterBottom align='center' component='h1' className={display1}>Personal Resume</Typography>
				<hr/>
				{/** todo: fix resume iframe in production */}
				{/** !!! Iframe is blank in production even though the file exists in this location !!! */}
				<iframe title="Personal Resume" className={pdf} src="https://jesse-harrah.herokuapp.com/assets/docs/Resume.pdf" />
			</Paper>
		)
	}
}
 
export default withStyles(styles)(Resume)