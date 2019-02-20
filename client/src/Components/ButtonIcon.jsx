import React, { Component } from 'react'
import Icon from './Icon'
// import { Button } from '@material-ui/core'

class ButtonIcon extends Component {
	render() {
		let { iconClass, type, color, link } = this.props.icon
		return (
			<a variant='text' target='_blank' className={this.props.mdClass} 
				href={link} 
				style={{color}}>
				<Icon iconClass={iconClass} type={type}/>
			</a>
		)
	}
}

export default ButtonIcon