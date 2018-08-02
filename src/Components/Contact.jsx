import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Paper, TextField, Typography } from '@material-ui/core'

const styles = {
	root: {
		maxWidth: 'max-content',
		margin: '2em auto',
		padding: '1.5em 4em'
	},
	textField: {
		// marginLeft: theme.spacing.unit,
		// marginRight: theme.spacing.unit,
		width: 200,
		margin: '1.5em auto',
	},
	headline: {
		margin: '.5em auto',
		width: 'max-content'
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
			<Typography gutterBottom variant='headline' component='h3' className={classes.headline}>Contact Us</Typography>
			<hr/>
				<form className={classes.container} noValidate autoComplete='off'>
					<TextField id='name' label='Name' className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin='normal' />
					<br/>
					<TextField id='email' label='Email' className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin='normal' />
					<br/>
					<TextField
						id="multiline-flexible"
						label="Multiline"
						multiline
						rowsMax="4"
						value={this.state.multiline}
						onChange={this.handleChange('multiline')}
						className={classes.textField}
						margin="normal"
					/>
				</form>
			</Paper>
		)
	}
}

export default withStyles(styles)(Contact)
