// import { projects } from '../data'

class ProjectController {
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
	async addProject(project) {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		const options = {
			method: 'POST',
			headers,
			body: JSON.stringify(project)
		}
		const request = new Request('api/projects', options)
		let res = await fetch(request)
		return await res.json()
	}
	async delete(id) {
		const headers = new Headers()
		headers.append('Content-Type', 'application/json')
		const options = {
			method: 'DELETE',
			headers
		}
		const request = new Request('api/projects/' + id, options)
		console.log('Deleting', id)
		let res = await fetch(request)
		return await res.json()
	}
	async getBio() {
		const headers = new Headers()
		headers.append('Content-Type', 'application/text')
		const options = {
			method: 'GET',
			headers
		}
		const request = new Request('api/bio', options)
		let res = await fetch(request)
		// console.log(await res.text())
		return await res.text()
	}

}

export default new ProjectController()
