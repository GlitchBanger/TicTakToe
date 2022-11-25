import './Grid.css';
import React, { Component } from 'react';
import BlockWrapper from './Block/BlockWrapper.js';

class Grid extends Component {	
	render() {
		let newgrid = this.props.grid.map((r, i) => {
			let datarow = r.map((data, j) => {
				let id = `blockid_${i}_${j}`;
				return (<BlockWrapper placeholder={data} id={id} key={id} onClick={this.props.onClick}/>);
			});
			return datarow;
		});
		return (
			<div className="Grid">
				{newgrid}
			</div>
		);
	}
}

export default Grid;
