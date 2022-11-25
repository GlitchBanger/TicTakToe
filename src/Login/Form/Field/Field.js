import React, { Component } from 'react';
import './Field.css';

class Field extends Component {
	render() {
		return (
			<div className="Field">
				<label for={this.props.id}>{this.props.label}:</label>
				<input type="text" id={this.props.id} placeholder={this.props.default}/>
			</div>
		);
	}
}

export default Field;
