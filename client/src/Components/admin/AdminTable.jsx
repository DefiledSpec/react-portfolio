import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableFooter, TablePagination, TableRow } from '@material-ui/core'
import ProjectController from '../../Controllers/ProjectController'
import TablePaginationActions from '../mui/TablePaginationActions'

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
		border: 'black solid 2px'
	},
	tableWrapper: {
		// overflowX: 'auto',
	},
}

class Admin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projects: [],
			page: 0,
			rowsPerPage: 5,
		}
	}
	
	componentDidMount() {
		this.getProjects()
		this.props.onRef(this)
	}
	componentWillUnmount() {
		this.props.onRef(undefined)
	}
	getProjects = async () => {
		try {
			let list = await ProjectController.getAll()
			return this.setState({projects: list})
		} catch(e) {
			console.error('Cannot \'GET\' api/projects.')
		}
	}
	handleDelete = async (id) => {
		if(id) {
			await ProjectController.delete(id)
			this.getProjects()
		}
	}
	handleUpdate = async (id) => {
		if(id) {
			
		}
	}
	handleChangePage = (event, page) => {
		this.setState({ page });
	  };
	
	handleChangeRowsPerPage = event => {
	this.setState({ rowsPerPage: event.target.value });
	};
	render() {
		const {classes} = this.props
		const { projects, rowsPerPage, page } = this.state;
		return (
			<div className={classes.tableWrapper}>
			<Table className={classes.table}>
				<TableBody>
					{projects.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
						return (
							<TableRow key={row._id}>
								<TableCell component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell >{row.img}</TableCell>
								<TableCell >{row.github.substring(19,)}</TableCell>
								{/* {(row.hasSite && <TableCell numeric>{row.link}</TableCell>) || <TableCell numeric>No Website Available.</TableCell>} */}
								<TableCell onClick={() => this.handleDelete(row._id)} style={{cursor: 'pointer', background: 'rgba(230, 40, 20, .7)', padding: '5px'}}>✘</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							rowsPerPageOptions={[5, 10, 15]}
							colSpan={4}
							count={projects.length}
							rowsPerPage={rowsPerPage}
							page={page}
							SelectProps={{
								native: false,
							}}
							onChangePage={this.handleChangePage}
							onChangeRowsPerPage={this.handleChangeRowsPerPage}
							ActionsComponent={TablePaginationActions}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</div>
		)
	}
}

export default withStyles(styles)(Admin)
