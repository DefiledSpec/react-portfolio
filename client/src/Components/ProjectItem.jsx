import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, GridList, GridListTile } from '@material-ui/core'

const styles = {
	card: {
		maxWidth: '225px',
		height: '275px',
		  margin: '1em auto',
		  background: '#24292e'
	},
	media: {
		maxHeight: '175px',
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

		// todo: make this mobile responsive 
		return (
			<GridList cols={3} className={classes.gridList}>
				{(this.props.projectList && this.props.projectList.map(function(project, i) {
					let { name, link, img, github, desc, _id } = project
					return (
					<GridListTile key={_id} id={_id} className={classes.tile} style={{height: 'auto'}}>
						<Card className={classes.card}>
							<CardMedia className={classes.media} image={'api/img/' + img} title={name} />
							<CardContent>
								{name && <div><Typography gutterBottom variant='title' component='h4' style={{color: 'ghostwhite'}}>
										{name}
									</Typography>
									<hr/>
								</div>}
								{desc && <Typography component='p' style={{color: 'ghostwhite'}}>
									{desc}
								</Typography>}
							</CardContent>
							<CardActions>
								{link && <Button variant="outlined" target='_blank' href={link} size='small' color='primary' style={{color: 'ghostwhite'}}>Website</Button>}
								{github && <Button variant="outlined" href={github} target='_blank' size='small' color='primary' style={{color: 'ghostwhite'}}>GitHub</Button>}
							</CardActions>
						</Card>
					</GridListTile>
					)
				})) || <p>There are no projects to display!</p>}	
			</GridList>
		)
	}
}

export default withStyles(styles)(ProjectItem)