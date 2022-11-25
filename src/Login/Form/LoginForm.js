import React, { Component } from 'react';
import Field from './Field/Field.js';
import Button from '../../Main/Button/Button.js';
import './LoginForm.css';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
	render() {
		return (
			<div className="LoginForm">
				<Field label="Username" default="Enter Username or Email" id="username" />
				<Field label="Password" default="Enter Password" id="password" />
				<Link to="/game" style={{textDecoration: 'none'}}><Button value="Login"/></Link>
			</div>
		);
	}
}

export default LoginForm;
