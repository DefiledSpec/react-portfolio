import { projects } from '../data'

class ProjectController {
	// add() {
	// }
	async getAll() {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		const options = {
			method: 'GET',
			headers
		}
		const request = new Request('api/projects', options)
		let res = await fetch(request)
		return await res.json()
		// return await projects
	}
}

export default new ProjectController
