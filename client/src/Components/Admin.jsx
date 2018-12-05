import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Paper, Typography} from '@material-ui/core'
import ProjectController from '../Controllers/ProjectController'
// import classNames from 'classnames'
// import ButtonIcon from './ButtonIcon'

const styles = {
	display1: {
		padding: '.55em',
		margin: '0 auto',
		width: '80%',
		color: '#24292e',
		borderBottom: '#24292e solid .5px'
	},
	root: {
		maxWidth: '960px',
		margin: '2.5em auto 5em auto',
		padding: '1em 2em',

	},
	table: {
		width: 'max-content',
		margin: '2em auto',
		padding: '1em .5em',
		// border: 'black solid 1px'
	},
	form: {
		width: 'max-content',
		margin: 'auto',
	}
}

let Row = (props) => (
	<tr id={props._id}>
		<td style={{border: '1px solid black'}}>{props.name}</td>
		<td style={{border: '1px solid black'}}>{props.img}</td>
		<td style={{border: '1px solid black'}}>{props.github}</td>
		<td onClick={() => props.deleteFn(props._id)} style={{border: '1px solid black', borderRadius: '3px', background: 'red', color: 'white', textAlign: 'center'}}>{'✘'}</td>
	</tr>
)

class Admin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projects: [],
			name: '',
			github: '',
			link: '',
			img: '',
			hasSite: false
		}
		// this.handleDelete.bind(this)
	}
	
	componentDidMount() {
		this.buildList()
	}
	handleChange = (e) => {
		let { name, value } = e.target
		if(name === 'link' && value !== '' && !this.state.hasSite) {
			this.setState({hasSite: true})
		}
		this.setState({[name]: value})		
	}
	handleDelete = async (id) => {
		if(id) {
			await ProjectController.delete(id)
			this.buildList()
		}
	}
	async buildList () {
		let trs = [] // trs = table rows
		let items = await this.getProjects()
		for (const item of items) {
			trs.push(<Row {...item} key={item._id} deleteFn={this.handleDelete} />)
		}
		return this.setState({projects: trs})
	}
	submitProject = async (e) => {
		e.preventDefault()
		let { projects, ...inputs } = this.state
		let { name, github } = inputs
		if(name !== '' && github !== '') {
			await ProjectController.addProject(inputs)
			this.buildList()
		}
	}
	getProjects = async () => {
		let list = await ProjectController.getAll()
		return list
		
	}
	render() {
		const {classes} = this.props	
		return (
			<Paper className={classes.root}>
				<Typography variant='display1' gutterBottom align='center' className={classes.display1}>Admin Panel</Typography>
				<Paper className={classes.table} elevation={0}>
					<Typography variant='title' gutterBottom align='center' component='h3'>My Projects</Typography>
					<table>
						<thead>
						<td style={{border: '1px solid black', margin: '0px 0px'}}>Name</td>
						<td style={{border: '1px solid black'}}>Image</td>
						<td style={{border: '1px solid black'}}>Github</td>
						<td style={{border: '1px solid black'}}>Delete</td>
						</thead>
						<tbody>
							{this.state.projects}
						</tbody>
					</table>
					<br/>
					<Typography variant='subheading' gutterBottom align='center' component='p'>Add New Project</Typography>
					<form onSubmit={this.submitProject} className={classes.form}>
						<input onChange={this.handleChange} value={this.state.name} placeholder='Project Name' type="text" name="name"/>
						<input onChange={this.handleChange} value={this.state.github} placeholder='Github Link' type="link" name="github"/>
						<input onChange={this.handleChange} value={this.state.link} placeholder='link' type="text" name="link"/>
						<input onChange={this.handleChange} value={this.state.img} placeholder='img' type="text" name="img"/>
						<input type="submit"/>
					</form>
				</Paper>
				<div className="clearfix"></div>
			</Paper>
		)
	}
}

export default withStyles(styles)(Admin)