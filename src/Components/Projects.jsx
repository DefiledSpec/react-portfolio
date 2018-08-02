import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import ProjectItem from './ProjectItem'
import {Paper} from '@material-ui/core'

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		overflow: 'hidden',
		maxWidth: '100vw',
		width: 'max-content',
		margin: '3em auto',
		padding: '1em 1.5em',
	},
	gridList: {
		maxWidth: 800,
	},
}

class Projects extends Component {
	componentWillMount() {		
		let proj = [
			{
				link: 'http://defiledspec.github.io/Word-Game-Hangman', 
				title: 'Hangman', 
				img: './assets/img/proj-1.jpg'
			},
			{
				link: 'http://defiledspec.github.io/Crystal-Collector', 
				title: 'Crystal Collector', 
				img: './assets/img/proj-2.jpeg'
			},
			{
				link: 'http://defiledspec.github.io/Trivia-Game', 
				title: 'Trivia Game', 
				img: './assets/img/proj-3.jpeg'
			},
			{
				link: 'http://defiledspec.github.io/GifTastic', 
				title: 'GifTastic', 
				img: './assets/img/proj-4.jpeg'
			},
			{
				link: 'http://defiledspec.github.io/Train-Scheduler', 
				title: 'Train UI', 
				img: './assets/img/proj-5.jpeg'
			},
			{
				link: 'http://gustbrad.github.io/mehyoutubeplayer', 
				title: 'MEH Youtube', 
				img: './assets/img/proj-6.jpeg'
			},
			{
				link: 'http://defiledspec.github.io/liri-bot', 
				title: 'Liri Bot', 
				img: './assets/img/proj-7.jpeg'
			},
			{
				link: 'http://defiledspec.github.io/word-guess-cli', 
				title: 'Hangman CLI', 
				img: './assets/img/proj-6.jpeg'
			},
			{
				link: 'http://defiledspec.github.io/bamazon-cli', 
				title: 'Bamazon', 
				img: './assets/img/proj-2.jpeg'},
			{
				link: '#', 
				title: 'Coming Soon!', 
				img: './assets/img/proj-7.jpeg'},
			{
				link: '#', 
				title: 'Coming Soon!', 
				img: './assets/img/proj-1.jpg'},
		];
		this.setState({
			projects: proj
		})
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
