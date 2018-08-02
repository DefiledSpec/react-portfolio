import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Paper, TextField, Typography, Button } from '@material-ui/core'

const styles = {
	root: {
		maxWidth: 'max-content',
		margin: '2em auto',
		padding: '1.5em 3em'
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
	},
	submit: {
		float: 'right'
	}
}

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			message: '',			
		}
	}
	handleChange = element => ({target}) => {
		if(element) {
			this.setState({
				[element]: target.value
			})
		}
	}
	handleSubmit = e => {
		e.preventDefault()
		let { target } = e
		let name = target[0].value
		let email = target[1].value
		let msg = target[3].value
		console.log('name: %s\nemail: %s\nmsg: %s\n', name, email, msg)
	}
	handleReset = () => {
		this.setState({
			name: '',
			email: '',
			message: '',
		})
	}
	render() {
		const {classes} = this.props
		return (
			<Paper className={classes.root}>
			<Typography gutterBottom variant='headline' component='h3' className={classes.headline}>Contact Me</Typography>
			<hr/>
				<form className={classes.container} noValidate autoComplete='off' onSubmit={this.handleSubmit.bind(this)} onReset={this.handleReset}>
					<TextField id='name' label='Name' className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin='normal' />
					<br/>
					<TextField id='email' label='Email' className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin='normal' />
					<br/>
					<TextField
						id="multiline-flexible"
						label="Multiline"
						multiline
						rowsMax="4"
						value={this.state.message}
						onChange={this.handleChange('message')}
						className={classes.textField}
						margin="normal"
						style={{marginBottom: '3em'}}
					/>
					<br/>
					<Button type='reset' color='secondary' variant='raised'>Reset</Button>
					<Button type='submit' color='primary' variant='raised' className={classes.submit}>Submit</Button>
				</form>
			</Paper>
		)
	}
}

export default withStyles(styles)(Contact)
