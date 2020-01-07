import React from 'react';

export default function Search(props) {
	let term = {};
	function searchTerm(search) {
		term = {search};
	}
	return (
		<form>
			<label htmlFor='search'>Search:</label>
			<input type='text' name='search' id='search' placeholder='search for book' onChange={event => searchTerm(event.target.value)}></input>
			<button 
			type='submit' 
			onSubmit={e => {
				e.preventDefault();
				props.getSearchTerm(term);
				props.getRequest();
				console.log(term);
				}}>Submit</button>
		</form>
		);
}