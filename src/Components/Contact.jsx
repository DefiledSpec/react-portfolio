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
			
		}
	}
	handleChange = element => ({target}) => {
		console.log(target.value)
		if(element) {
			this.setState({
				[element]: target.value
			})
		}
	}
	handleSubmit = e => {
		console.log(e)
	}
	render() {
		const {classes} = this.props
		return (
			<Paper className={classes.root}>
			<Typography gutterBottom variant='headline' component='h3' className={classes.headline}>Contact Me</Typography>
			<hr/>
				<form className={classes.container} noValidate autoComplete='off' onSubmit={this.handleSubmit}>
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
					/>
					<br/>
					<Button type='submit' color='secondary' variant='raised'>Reset</Button>
					<Button type='submit' color='primary' variant='raised' className={classes.submit}>Submit</Button>
				</form>
			</Paper>
		)
	}
}

export default withStyles(styles)(Contact)
