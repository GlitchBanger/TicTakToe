import React, { Component } from 'react';
import Field from './Field/Field.js';
import Button from '../../Main/Button/Button.js';
import './Form.css';
import { Navigate } from 'react-router-dom';

class Form extends Component {
	render() {
		return (
			<div className="Form">
				<Field label="Username" default="Enter Username" id="username" />
				<span className="Error">{this.props.error}</span>
				<Button value="Enter" onClickHandle={this.props.submit} />
			</div>
		);
	}
}

export default Form;
