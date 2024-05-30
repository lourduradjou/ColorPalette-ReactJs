import React from 'react'
import './styles.css'

function Navbar() {
	return (
		<nav>
			<ul>
				<li>Home</li>
				<li>About</li>
				<li>Contact</li>
			</ul>
			<div className='logo'>
				<p>logo</p>
			</div>
		</nav>
	)
}

export default Navbar
