import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Paper, TextField, Typography, Button } from '@material-ui/core'
import ContactMsg from '../Controllers/ContactMsg'
import { red } from '@material-ui/core/colors'

const styles = {
	root: {
		maxWidth: 'max-content',
		margin: '2.5em auto 5em auto',
		padding: '1.5em 3em'
	},
	textField: {
		width: 200,
		margin: '1.5em auto',
	},
	display1: {
		margin: '.5em auto 0 auto',
		width: '100%',
		borderBottom: 'solid black 1px',
		textAlign: 'center',
		padding: '.55em',
	},
	buttonsContainer: {
		display: 'flex',
		alignContents: 'justify'
	},
	reset: {
		float: 'right',
	}
}

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			email: '',
			msg: '',
			message: ''		
		}
	}
	handleChange = element => ({target}) => {
		if(element) {
			this.setState({
				[element]: target.value
			})
		}
	}
	handleSubmit = async (e) => {
		e.preventDefault()
		let { name, email, msg } = this.state
		let isSent = ContactMsg.add({name, email, msg})
		if(isSent) {
			this.setState({message: 'Your message has been sent!'})
			this.handleReset()
		}
	}
	handleReset = () => {
		this.setState({
			name: '',
			email: '',
			msg: '',
		})
	}
	render() {
		const {classes} = this.props
		return (
			<Paper className={classes.root}>
				<Typography gutterBottom variant='headline' component='h3' className={classes.display1}>Contact Me</Typography>
				{this.state.message && <div><br /><p>{this.state.message}</p></div>}
				<form className={classes.container} noValidate autoComplete='off' onSubmit={this.handleSubmit.bind(this)} onReset={this.handleReset}>
					<TextField id='name' label='Name' className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin='normal' />
					<br/>
					<TextField id='email' label='Email' className={classes.textField} value={this.state.email} onChange={this.handleChange('email')} margin='normal' />
					<br/>
					<TextField
						id="multiline-flexible"
						label="Questions / Comments"
						multiline
						rowsMax="10"
						value={this.state.msg}
						onChange={this.handleChange('msg')}
						className={classes.textField}
						margin="normal"
						name="msg"
						style={{ marginBottom: '3em' }}
					/>
					<br/>
					<Button type='submit' color='primary' variant='raised' >Submit</Button>
					<Button type='reset' variant='raised' style={{background: red['700'], color: 'ghostwhite'}} className={classes.reset}>Reset</Button>
				</form>
			</Paper>
		)
	}
}

export default withStyles(styles)(Contact)
