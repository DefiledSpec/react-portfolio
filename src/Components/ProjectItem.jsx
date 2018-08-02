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
				{this.props.projectList.map(function(project, i) {
					let { title, img, link } = project
					return (
					<GridListTile key={i} className={classes.tile} style={{height: 'auto'}}>
						<Card className={classes.card}>
							<CardMedia className={classes.media} image={img} title={title} />
							<CardContent>
								<Typography gutterBottom variant='headline' component='h2'>
									{title}
								</Typography>
								<Typography component='p'>
									Short item description.
								</Typography>
							</CardContent>
							<CardActions>
								<Button href={link} size='small' color='primary'>Project</Button>
								<Button size='small' color='primary'>GitHub</Button>
							</CardActions>
						</Card>
					</GridListTile>
					)
				})}	
			</GridList>
		)
	}
}

export default withStyles(styles)(ProjectItem)