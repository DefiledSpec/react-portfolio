import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Paper, Typography, TextField, Badge } from '@material-ui/core'
import ProjectController from '../../Controllers/ProjectController'
import { BorderColor } from '@material-ui/icons'
// import classNames from 'classnames'
// import ButtonIcon from './ButtonIcon'
import AdminTable from './AdminTable'

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
	},
	bioEdit: {
		width: '80%',
		margin: '0 auto',
		padding: '.25em .5em'
		// display: 'block'
		// marginLeft: '1em',
		// marginRight: '1em'
	}
}

let Row = (props) => (
	<tr id={props._id}>
		<td style={{ border: '1px solid black' }}>{props.name}</td>
		<td style={{ border: '1px solid black' }}>{props.img}</td>
		<td style={{ border: '1px solid black' }}>{props.github}</td>
		<td onClick={() => props.deleteFn(props._id)} style={{ border: '1px solid black', borderRadius: '3px', background: 'red', color: 'white', textAlign: 'center' }}>{'✘'}</td>
	</tr>
)

class Admin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: '',
			github: '',
			link: '',
			img: '',
			hasSite: false,
			count: 0,
			admin: false,
			bio: '',
			bioEdit: false,
			contacts: []
		}
		// this.handleDelete.bind(this)
	}

	async componentWillMount() {
		if(localStorage.getItem('auth')) {
			let bool = await fetch('/api/admin/'+ localStorage.getItem('auth'))
			let auth = await bool.json()
			if(!auth) {
				return window.location = '/'
			}
			this.setState({ admin: auth })
			let bio = await ProjectController.getBio()
			if(bio && bio !== '') this.setState({ bio })
		} else {
			return window.location = '/'
		}
	}
	componentWillUnmount() {
	}
	handleChange = (e) => {
		let { name, value } = e.target
		if(name === 'img') this.setState({ img: value})
		if (name === 'link' && value !== '' && !this.state.hasSite) {
			this.setState({ hasSite: true })
		}
		this.setState({ [name]: value })
	}
	handleDelete = async (id) => {
		if (id) {
			await ProjectController.delete(id)
			this.buildList()
		}
	}
	// async buildList () {
	// 	let trs = [] // trs = table rows
	// 	let items = await this.getProjects()
	// 	for (const item of items) {
	// 		trs.push(<Row {...item} key={item._id} deleteFn={this.handleDelete} />)
	// 	}
	// 	return this.setState({projects: trs})
	// }
	submitProject = async (e) => {
		e.preventDefault()
		let { count, ...inputs } = this.state
		let { name, github, link, img, hasSite } = inputs
		if (name !== '' && github !== '') {
			if(link !== '') {
				this.setState({hasSite: true})
				let update = inputs
				update.hasSite = true
				let added = await ProjectController.addProject(update)
				console.log('update', added)
			} else {
				await ProjectController.addProject(inputs)
			}
			this.setState({count: this.state.count++})
			await this.child.getProjects()
		}
	}
	// getProjects = async () => {
	// 	let list = await ProjectController.getAll()
	// 	return list

	// }
	handleBioEdit = (e) => {
		this.setState({bioEdit: !this.state.bioEdit})
	}
	updateBio = async (e) => {
		e.preventDefault()
		if(this.state.bio !== '') {
			console.log('Bio updated', this.state.bio.trim())
		}
	}
	render() {
		const { classes } = this.props
		let { admin, count, bio, bioEdit, contacts } = this.state
		return (admin &&
			<Paper className={classes.root}>
				<Typography variant='display1' gutterBottom align='center' className={classes.display1}>Admin Panel</Typography>
				<Paper className={classes.table} elevation={0}>
					<Typography variant='title' gutterBottom align='center' component='h3'>My Projects</Typography>
					<AdminTable onRef={ref => this.child = ref} />
					<br />
					<Typography variant='subheading' gutterBottom align='center' component='p'>Add New Project</Typography>
					<form onSubmit={this.submitProject} className={classes.form} encType="multipart/form-data">
						<input onChange={this.handleChange} value={this.state.name} placeholder='Project Name' type="text" name="name" />
						<input onChange={this.handleChange} value={this.state.github} placeholder='Github Link' type="link" name="github" />
						<br />
						<input onChange={this.handleChange} value={this.state.link} placeholder='link' type="text" name="link" />
						<input onChange={this.handleChange} value={this.state.img} placeholder='img' type="text" name="img" />
						<br />
						<input type="submit" value="Submit" />
					</form>
				</Paper>
				{bio && <div>
					<Typography variant='title' gutterBottom align='center' className={classes.display1}>Bio <BorderColor name='bioEdit' onClick={this.handleBioEdit}/></Typography>
					
					{!bioEdit && <Typography variant='body1' className={classes.bioEdit}>{bio}</Typography> || 
						<form onSubmit={this.updateBio}>
							<TextField 
								id='bio' 
								label='Edit Bio' 
								multiline rowsMax='10' 
								value={bio} 
								onChange={this.handleChange}
								className={classes.bioEdit}
								// margin='normal'
								variant='outlined'
							/>
							<input type='submit' value='Update Bio' />
						</form>
					}
					
				</div>}
				{contacts && <div>

				</div>}
				<div className="clearfix"></div>
			</Paper>
			|| 	<Paper>
					<Typography 
						variant='display1' 
						gutterBottom align='center' 
						className={classes.display1}>Loading
					</Typography>
				</Paper>
		)
	}
}

export default withStyles(styles)(Admin)
