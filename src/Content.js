import React from 'react'
import './content.css'
import { useState } from 'react'
import { useRef } from 'react'

function Content() {
	const [colorName, setcolorName] = useState('')
	const inputRef = useRef()

	const handleSubmit = (e) => {
		e.preventDefault()
		inputRef.current.focus()
	}

	const handleChange = (e) => {
		setcolorName(e.target.value)
	}
	return (
		<div className='outerbox'>
			<div>
				{/* We need a div to show the color and the input text box to get  */}
				<div
					className='container'
					style={{ backgroundColor: colorName }}
				></div>
				<form action='' onSubmit={(e) => handleSubmit(e)}>
					<input
						type='text'
						value={colorName}
						onChange={(e) => handleChange(e)}
						autofocus
						ref={inputRef}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default Content
