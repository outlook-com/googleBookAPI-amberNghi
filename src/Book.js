import React from 'react';

export default function Book(props) {
	return (
        <li> 
            <h2>{props.title}</h2> 
            <img src={props.img} alt='book image'/>
          <div>
            <p>{props.author}</p>
            <p>{props.price}</p>
            <p>{props.summary}</p>
          </div>
        </li> 

    );
   
}