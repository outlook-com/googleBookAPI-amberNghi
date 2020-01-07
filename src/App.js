import React from 'react';
import BookList from './BookList';
import Search from './Search';
import Filter from './Filter';

export default class App extends React.Component {
  state = {
    data:[]};

  let searchTerm = 'flowers+inauthor';

  componentDidMount() {
  	fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.searchTerm}:keyes&key=AIzaSyA_RO1uYqbD4lcGprijI3EcIbmvGLUf7T0`)
  	.then(response => response.json())
  	.then(data => console.log(data));
  }

  render() {
  	return (
    <>
    	<h1>Google Book Search</h1>
	    <Search />
	    <Filter />
	    <BookList />
    </>
    );
  }
  
 
}