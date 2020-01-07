import React from 'react';
import BookList from './BookList';
import Search from './Search';
import Filter from './Filter';

export default class App extends React.Component {
  state = {
  	loading: false,
  	error: null,
  	filterPrint: null,
  	filterBook: null, 
  	searchTerm: null,
	items:[]
  };

 // Updates searchTerm
  getSearchTerm = term => {
  	this.setState({
  		searchTerm: term, 
  		loading: true});
  }

  // Checks for any filters and creates URL for the query
  generateURLQuery = () => {
	  if(this.state.filterPrint === null && this.state.filterBook === null) {
		return null;
	  }
	  else if(this.state.filterPrint !== null) {
		  return `&printType=${this.state.filterPrint}`;
	  }
	  else if(this.state.filterBook !== null) {
		  return `&filter=${this.state.filterBook}`;
	  }
	  else {
		  return `&printType=${this.state.filterPrint}&filter=${this.state.filterBook}`;
	  }
  }

  // Gets data from API
  getRequest = () => {
	const filter = this.generateURLQuery();
  	fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}${filter}&key=AIzaSyA_RO1uYqbD4lcGprijI3EcIbmvGLUf7T0`)
  	.then(response => 
		  // Saves data if response is OK
		  // Rejects promise if response is not OK
  		response.ok ? 
  		response.json() : 
  		Promise.reject('Something went wrong'))
	  .then(data =>
		{
			this.setState({items: data.items, loading: false});
			console.log(this.state.items);
		}
  		)
	  .catch(error => this.setState({error, loading: false}));
  }

  // Updates filter print
  getFilterPrint = (filterPrint) => {
	  console.log(filterPrint);
	  this.setState({filterPrint});
  } 

  // Updates filter book
  getFilterBook = (filterBook) => {
	console.log(filterBook);
	this.setState({filterBook});
	} 


  render() {
  	return (
    <>
    	<h1>Google Book Search</h1>
	    <Search getSearchTerm={this.getSearchTerm} getRequest={this.getRequest} />
	    <Filter getFilter={this.getFilter}/>
	    {/*<BookList items={this.state.items}/>*/}
    </>
    );
   }
 
}