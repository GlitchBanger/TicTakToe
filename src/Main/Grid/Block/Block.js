import React, { Component } from 'react';
import './Block.css';
class Block extends Component {
	render() {
		return (
			<div className="Block" onClick={this.props.onClick} id={this.props.id}>
				<p>{this.props.placeholder}</p>
			</div>
		);
	}
}

export default Block;
