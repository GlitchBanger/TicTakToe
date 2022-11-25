import React from 'react';
import Header from './Header/Header.js';
import Form from './Form/Form.js';

function Login(props) {
		
	return (
		<div>
			<Header />
			<Form submit={props.submitHandler} error={props.error} />
		</div>
	);
		
}

export default Login;
