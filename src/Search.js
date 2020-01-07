import React from 'react';

export default function Search(props) {
	return (
		<form>
			<label htmlFor='search'>Search:</label>
			<input type='text' name='search' id='search' placeholder='search for book'></input>
			<button 
			type='submit' 
			onClick={e => {
				e.preventDefault();
				props.getSearchTerm();
				}>Submit</button>
		</form>
		);
}