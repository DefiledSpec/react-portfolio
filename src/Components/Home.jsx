import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Paper,Typography,Avatar} from '@material-ui/core'
import classNames from 'classnames'

const styles = {
	display2: {

	},
	root: {
		maxWidth: '960px',
		margin: '2em auto',
		padding: '1em 1.5em'

	},
	avatar: {
		margin: '2em auto',
	},
	bigAvatar: {
		width: 120,
		height: 120,
	},
	about: {
		margin: '2em 1.5em',
	},
}

class Home extends Component {
	render() {
		const {classes} = this.props
		return (
			<Paper className={classes.root}>
				<Typography variant='display2' color='textSecondary' gutterBottom align='center' component='h1' className={classes.display2}>About Me</Typography>
				<div className="clearfix">
					<hr/>
					<Avatar alt='Jesse Harrah' src='./assets/img/me.jpg' className={classNames(classes.avatar, classes.bigAvatar)} />
					<Typography component='p' className={classes.about}>
						Full Stack Web Developmer who knows HTML, CSS, JavaScript, Node.js, &amp; jQuery.
                        I love technology and the rapid pace that it has moved at as well as solving problems. 
                        I’m mechanically inclined and a quick learner. I’m currently seeking full-time employment in Web 
                        Development to broaden my skills and help make meaningful web applications.
					</Typography>
					
				</div>
			</Paper>
		)
	}
}

export default withStyles(styles)(Home)
