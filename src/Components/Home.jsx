import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Paper, Typography, Avatar, Button} from '@material-ui/core'
import classNames from 'classnames'
import Icon from './Icon'

const styles = {
	display1: {
		padding: '.55em',
		margin: '0 auto',
		width: '80%',
		color: '#24292e',
		borderBottom: '#24292e solid 1.5px'
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
		borderTop: 'black 1px solid',
		borderBottom: 'black 1px solid',
		padding: '.75em 6em',
		
	},
	mdIcon: {
		fontSize: '2.2em',
		padding: '.375em',
		margin: '0 .5em',
		borderRadius: '50%',
	}
}

class Home extends Component {
	render() {
		const {classes} = this.props
		return (
			<Paper className={classes.root}>
				<Typography variant='display1' gutterBottom align='center' component='h1' className={classes.display1}>About Me</Typography>
				<div className="clearfix">
					<Avatar alt='Jesse Harrah' src='./assets/img/me.jpg' className={classNames(classes.avatar, classes.bigAvatar)} />
					<section className={classes.icons}>
						<Button variant='text' className={classes.mdIcon} href='https://github.com/DefiledSpec' style={{color: '#24292e'}}>
							<Icon iconClass='fa-github-alt md' type='fab'/>
						</Button>
						<Button variant='text' className={classes.mdIcon} href='https://stackoverflow.com/users/9701111/defiled-spec' 
							style={{color: '#f48024'}}>
							<Icon iconClass='fa-stack-overflow md' type='fab'/>
						</Button>
					</section>
					<Typography component='p' className={classes.about}>
						Full Stack Web Developer who knows HTML, CSS, JavaScript, Node.js, &amp; jQuery.
                        I love technology and the rapid pace that it has moved at, as well as solving problems. 
                        I’m mechanically inclined and a quick learner. I’m currently seeking full-time employment in Web 
                        Development to broaden my skills and help make meaningful web applications.
					</Typography>					
				</div>
			</Paper>
		)
	}
}

export default withStyles(styles)(Home)
