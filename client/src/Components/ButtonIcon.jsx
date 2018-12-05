import React, { Component } from 'react'
import Icon from './Icon'
import { Button } from '@material-ui/core'

class ButtonIcon extends Component {
	render() {
		let { iconClass, type, color, link } = this.props.icon
		return (
			<Button variant='text' className={this.props.mdClass} 
				href={link} 
				style={{color}}>
				<Icon iconClass={iconClass} type={type}/>
			</Button>
		)
	}
}

export default ButtonIcon