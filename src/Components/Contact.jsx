import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Paper, TextField } from '@material-ui/core'

const styles = {
	root: {
		maxWidth: '960px',
		margin: '2em auto',
		padding: '1.5em 2em'
	}
}

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		}
	}
	handleChange = element => ({target}) => {
		if(target.value)
			this.setState({
				[element]: target.value
			})
	}
	render() {
		const {classes} = this.props
		return (
			<Paper className={classes.root}>
				<form className={classes.container} noValidate autoComplete='off'>
					<TextField id='name' label='Name' className={classes.TextField} value={this.state.name} onChange={this.handleChange('name')} margin='normal' />
					<TextField id='email' label='Email' className={classes.TextField} value={this.state.email} onChange={this.handleChange('email')} margin='normal' />
				</form>
			</Paper>
		)
	}
}

export default withStyles(styles)(Contact)
