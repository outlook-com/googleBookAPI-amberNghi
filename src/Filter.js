import React from 'react';

export default function Filter(props) {
    return ( 
    	<div>
	        <label htmlFor='printFilter'>Print Type: </label>
	            <select aria-label='filter by print' name='filter' id='printFilter' onChange={e => {e.preventDefault(); props.getPrintType(this.value);}}>
	                <option value='all'>All</option>
	                <option value='books'>Books</option>
	                <option value='magazines'>Magazines</option>
	            </select>
	        <label htmlFor='bookFilter'>Book Type: </label> 
	            <select aria-label='filter by book' name='filter' id='bookFilter'>
	                <option value='partial'>Partial</option>
	                <option value='full'>Full</option>
	                <option value='free-ebooks'>Free-ebooks</option>
	                <option value='paid-ebooks'>Paid-ebooks</option>
	                <option value='ebooks'>Ebooks</option>
	            </select>
        </div>
    );}