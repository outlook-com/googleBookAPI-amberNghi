import React from 'react';

import Book from './Book';


export default function BookList(props) {
    // Checks if item info exist
    function getProperty(obj, key) {
        return key.split('.').reduce(function(prevVal, currentVal){
            return (typeof prevVal == 'undefined' || prevVal === null) ? prevVal : prevVal[currentVal];},
            obj);
    }
    // Creates image if exist, else return placeholder img
    function checkForImg(item) {
        console.log(getProperty(item, 'volumeInfo.imageLinks.thumbnail'));
        if (getProperty(item, 'volumeInfo.imageLinks.thumbnail'))
        {

            return `${item.volumeInfo.imageLinks.thumbnail}`;
        }
        return 'data:image/png;base64,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';
    }
    // Creates author if exists
    function checkForAuthor(item) {
        if (getProperty(item, 'volumeInfo.authors'))
        {
            return `${item.volumeInfo.authors}`;
        }
        return '';
    }
    // Creates summary if exists
    function checkForSummary(item) {
        if (getProperty(item, 'searchInfo.textSnippet'))
        {
            return `${item.searchInfo.textSnippet}`;
        }
        return '';
    }
	return (
        <section className='BookList'>
            <ul>
                {props.items.map(item => 
                    <Book 
                    key={item.id}
                    title={item.volumeInfo.title}
                    img={checkForImg(item)}
                    author={checkForAuthor(item)}
                    price={item.saleInfo.saleability}
                    summary={checkForSummary(item)}
                    />)
                }
            </ul>
        </section>
    );
}