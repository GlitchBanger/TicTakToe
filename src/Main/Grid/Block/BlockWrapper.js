import React, { Component } from "react";
import Block from "./Block";

class BlockWrapper extends Component {
	render() {
		return (
			<Block placeholder={this.props.placeholder} id={this.props.id} onClick={this.props.onClick}/>
		);
	}
}

export default BlockWrapper;
