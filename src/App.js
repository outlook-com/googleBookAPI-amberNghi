import React from 'react';
import BookList from './BookList';
import Search from './Search';
import Filter from './Filter';

export default class App extends React.Component {
  state = {
  	loading: false,
  	error: null,
  	searchTerm: '',
    items:[]};

 // Sample data structure
 //"kind": "books#volumes",
 // "items": [
 //  {
 //   "kind": "books#volume",
 //   "id": "_ojXNuzgHRcC",
 //   "etag": "OTD2tB19qn4",
 //   "selfLink": "https://www.googleapis.com/books/v1/volumes/_ojXNuzgHRcC",
 //   "volumeInfo": {
 //    "title": "Flowers",
 //    "authors": [
 //     "Vijaya Khisty Bodach"
 //    ],

 // Callback function to update searchTerm
  function getSearchTerm(searchTerm) {
  	setState({this.state.searchTerm: searchTerm, loading: true});
  }

  componentDidMount() {
  	fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}:keyes&key=AIzaSyA_RO1uYqbD4lcGprijI3EcIbmvGLUf7T0`)
  	.then(response => 
  		// If error is successful, save data, if not, reject promise
  		response.ok ? 
  		response.json() : 
  		Promise.reject('Something went wrong'))
  	.then(data => {
  		this.setState({items, loading: false}))
  	.catch(error => this.setState({error, loading: false}));
  }


  render() {
  	return (
    <>
    	<h1>Google Book Search</h1>
	    <Search getSearchTerm={this.getSearchTerm} />
	    <Filter />
	    <BookList />
    </>
    );
  }
  
 
}