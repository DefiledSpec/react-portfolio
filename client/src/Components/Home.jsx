import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Paper, Typography, Avatar} from '@material-ui/core'
import classNames from 'classnames'
import ButtonIcon from './ButtonIcon'
import { icons } from '../data'
import ProjectController from '../Controllers/ProjectController'

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
	avatar: {
		margin: '2em auto 0 auto',
	},
	bigAvatar: {
		width: 140,
		height: 140,
	},
	about: {
		fontSize: '1.4em',
		textAlign: 'center',
		margin: '1em 1.5em',
	},
	icons: {
		width: 'max-content',
		margin: '2.5em auto',
		borderTop: '#24292e .5px solid',
		borderBottom: '#24292e .5px solid',
		padding: '.75em 5em',
		
	},
	mdIcon: {
		fontSize: '2.2em',
		padding: '.375em',
		margin: '0 .5em',
		borderRadius: '50%',
	}
}



class Home extends Component {
	state = {
		bio: ''
	}
	async componentWillMount() {
		let bio = await ProjectController.getBio()
		if(bio && bio !== '') this.setState({ bio })
	}

	createIcons = () => {
		let myIcons = []
		let key = 0
		for (const icon of icons) {
			myIcons.push(<ButtonIcon key={key} icon={icon} mdClass={this.props.classes.mdIcon} />)
			key++
		}
			return myIcons
	}
	render() {
		const {classes} = this.props
		let myButtons = this.createIcons()
		return (
			<Paper className={classes.root}>
				<Typography variant='display1' gutterBottom align='center' component='h1' className={classes.display1}>About Me</Typography>
				<div className="clearfix">
					<Avatar alt='Jesse Harrah' src='/api/img/me.jpg' className={classNames(classes.avatar, classes.bigAvatar)} />
					<section className={classes.icons}>
						{ myButtons }
					</section>
					<Typography component='p' className={classes.about}>
						{ this.state.bio }
					</Typography>					
				</div>
			</Paper>
		)
	}
}

export default withStyles(styles)(Home)
