import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import ProjectItem from './ProjectItem'
import {Paper} from '@material-ui/core'
import pController from '../Controllers/Projects'
let projects = new pController()
const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		maxWidth: '90vw',
		width: 'max-content',
		margin: '3em auto',
		padding: '1em 1.5em',
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
	
	async componentWillMount() {		
		let proj = await projects.getAll()
		console.log(proj)
		this.setState({
			projects: proj
		})
		console.log(this.state.projects)
	}
	render() {
		const {classes} = this.props
		return (
			<Paper className={classes.root}>
				<ProjectItem projectList={this.state.projects} />
			</Paper>
		)
	}
}



export default withStyles(styles)(Projects)
