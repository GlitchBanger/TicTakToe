import React from 'react';
import Grid from './Grid/Grid.js';
import Button from './Button/Button.js';
import './Main.css';

function Main(props) {	
		
		return (
			<main>
				<Button value="Go Back" onClickHandle={props.navHandler}/>
        <div className="center">
          <Grid grid={props.grid} onClick={props.handleClick}/>
          <Button value="Reset" onClickHandle={props.clickHandler}/>
        </div>
      </main>
		);
	}

export default Main;
