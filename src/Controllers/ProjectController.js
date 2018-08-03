class ProjectController {
	// add() {
	// 	// todo: add functionallity to add projects to the db
	// }
	async getAll() {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		const options = {
			method: 'GET',
			headers
		}
		const request = new Request('http://localhost:3005/api/projects', options)
		let res = await fetch(request)
		return await res.json()
	}
}

export default new ProjectController
