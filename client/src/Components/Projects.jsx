import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import ProjectItem from './ProjectItem'
import { Paper, Typography } from '@material-ui/core'
import ProjectController from '../Controllers/ProjectController'

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		maxWidth: '960px',
		// width: 'max-content',
		margin: '2.5em auto 5em auto',
		padding: '1em 1.5em',
	},
	display1: {
		padding: '.55em',
		margin: '0 auto 1em auto',
		width: '80%',
		color: '#24292e',
		borderBottom: '#24292e solid 1.5px'
	},
	gridList: {
		maxWidth: 800,
	},
}

class Projects extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projects: []
		}
	}
	componentWillMount() {		
		this.updateProjects()
	}
	async updateProjects() {
		let proj = await ProjectController.getAll()
		this.setState({
			projects: proj
		})
		// console.log(this.state.projects)
	}
	render() {
		const {classes} = this.props
		return (
			<Paper className={classes.root}>
				<Typography variant='display1' gutterBottom 
					align='center' component='h1' 
					className={classes.display1}>Recent Projects</Typography>
				<ProjectItem projectList={this.state.projects} />
			</Paper>
		)
	}
}



export default withStyles(styles)(Projects)
