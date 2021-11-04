
import React from "react";
import { MenuOptions } from "./menuOptions";
export const Navigation = (props) => {

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
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
				<a className='navbar-brand' href='#page-top'>
					<img style={{maxWidth:200}} src="../img/logoweb-01.png" alt="" className={'main-logo'} />
			
				</a>{' '}
			</div>
			<div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
				<MenuOptions/>
			</div>
		</div>
    </nav>
  )
}
