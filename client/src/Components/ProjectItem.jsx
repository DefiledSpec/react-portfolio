import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, GridList, GridListTile } from '@material-ui/core'

const styles = {
	card: {
		maxWidth: '225px',
		// height: 'max-content',
	  	margin: '1em auto',
	},
	media: {
		height: 0,
		width: '225px',
		paddingTop: '56.25%', // 16:9
		
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
	gridList: {
		maxWidth: '100vw',
		// maxWidth: 'max-content',
		margin: '5em auto',
	},
	root: {
		height: '200px', 
		width: 'auto', 
		padding: '.2em',
	}
  }
  class ProjectItem extends Component {
	render() {
		const {classes} = this.props
		return (
			<GridList cols={3} className={classes.gridList}>
				{this.props.projectList && this.props.projectList.map(function(project, i) {
					let { name, link, img, github, desc } = project
					return (
					<GridListTile key={i} className={classes.tile} style={{height: 'auto'}}>
						<Card className={classes.card}>
							<CardMedia className={classes.media} image={'api/img/' + img} title={name} />
							<CardContent>
								<Typography gutterBottom variant='headline' component='h3'>
									{name}
								</Typography>
								<Typography component='p'>
									{desc}
								</Typography>
							</CardContent>
							<CardActions>
								{link && <Button href={link} size='small' color='primary'>Project</Button>}
								{github && <Button href={github} size='small' color='primary'>GitHub</Button>}
							</CardActions>
						</Card>
					</GridListTile>
					)
				}) || <p></p>}	
			</GridList>
		)
	}
}

export default withStyles(styles)(ProjectItem)