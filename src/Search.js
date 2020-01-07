import React from 'react';

export default function Search(props) {
	return (
		<form id='searchForm' onSubmit={e => {e.preventDefault(); props.getRequest();}}>
			<label htmlFor='search'>Search:</label>
			<input type='text' name='search' id='search' placeholder='search for book' onChange={event => props.getSearchTerm(event.target.value)}></input>
			<button 
			type='submit' 
			onSubmit={e =>
				{
				props.getRequest();
			}}
				>Submit</button>
		</form>
		);
}