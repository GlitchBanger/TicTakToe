import React, { Component } from 'react';
import './Button.css'

class Button extends Component {
	render() {
		return (
			<p 
			   onClick={this.props.onClickHandle} 
			   className="Button"
			>
				{this.props.value}
			</p> 
		);
	}
}

export default Button;
