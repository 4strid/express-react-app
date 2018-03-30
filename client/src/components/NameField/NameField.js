import React from 'react'

const NameField = props => (
	<div>
		Name: <input value={props.username} onChange={evt => props.handleRename(evt.target.value)}/>
	</div>
)

export default NameField
