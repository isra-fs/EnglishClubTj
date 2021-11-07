
import React,{useState} from "react";
import { MenuOptions } from "./menuOptions";
import {  animateScroll as scroll } from "react-scroll";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
export const Navigation = (props) => {

	const _scrollToTop = () => {
		scroll.scrollToTop();
	};

	const [expanded, setExpanded] = useState(false);
	return (
		<Navbar   
		collapseOnSelect onClick={() => {
			setExpanded(expanded ? false : "expanded")
		}}  
		expanded={expanded}
		id='menu' 
		className='navbar navbar-default navbar-fixed-top'
		
		>
			<div className='container header'>
				<div className='navbar-header'>
					<button
						type='button'
						className='navbar-toggle collapsed'
						data-toggle='collapse'
						data-target='#bs-example-navbar-collapse-1'>
							{' '}
							<span className='sr-only'>Toggle navigation</span>{' '}
							<span className='icon-bar'></span>{' '}
							<span className='icon-bar'></span>{' '}
							<span className='icon-bar'></span>{' '}
					</button>
					<a className='navbar-brand' onClick={_scrollToTop}>
						<img style={{maxWidth:200}} src="img/logoweb-01.png" alt="" className={'main-logo'} />
				
					</a>{' '}
				</div>
				<Navbar.Collapse className='collapse navbar-collapse'>
					<MenuOptions setExpanded={()=>{setExpanded(false) }}/>
          		</Navbar.Collapse>
				
			</div>
		</Navbar>
	)
}
