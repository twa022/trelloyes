import React from 'react';

import './App.css';

import ListClass from './List.js';
import CardClass from './Card.js';

function Header( props ) {
	return (
		<div className="App-header">
			<h1>{props.title}</h1>
		</div>
	);
}

function generateCard( id, store ) {
	const title = store.allCards[id].title;
	const content = store.allCards[id].content;
	return (
		<CardClass
			title={ title }
			content={ content }
			key_={ 'card' + id }
		/>
	);
}

function generateList( id, store ) {
	console.log( id );
	const list = store.lists.find( list => list.id.localeCompare( id ) === 0 );
	console.log( list );
	const header = list.header;
	const cards = list.cardIds.map( id => generateCard( id, store ) );

	return (
		<ListClass
			header={ header }
			cards={ cards }
			key_={ 'list' + id }
		/>
	);
}

function App( props ) {
	console.log( Object.keys(props.store) );
	const lists = props.store.lists.map( list => generateList( list.id, props.store ) );
	console.log( lists );
	return (
		<main className='App'>
			<Header title="Trelloyes!" />
			<div className="App-list">
				{ lists }
			</div>
		</main>
	);
}

export default App;
