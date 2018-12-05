import React, { Component } from 'react'

class Icon extends Component {
	constructor(props) {
		super(props)
		let { iconClass, alt, type } = props
		this.state = {
			iconClass: iconClass || '',
			alt: alt || '',
			type
		}
	}
	render() {
		return (
			<i className={`${this.state.type} ${this.state.iconClass} ${this.state.alt}`.trim()}>
				{this.props.children}
			</i>
		)
	}
}

export default Icon
