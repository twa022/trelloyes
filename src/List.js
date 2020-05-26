import React from 'react';

import './List.css';
import './Card.js';

class ListClass extends React.Component {
	static defaultProps = {
		header: "List Header",
		cards: [],
	};


	render() {
		//const cardList = this.props.cards.map( card => <Card title={card.title} content={card.content} /> )

		return (
			<section className="List" key={this.props.key_}>
				<header className="List-header">{this.props.header}</header>
				<div className="List-cards">
					{this.props.cards}
					<button className="List-add-button">+ Add Random Card</button>
				</div>
			</section>
		);
	}
}

export default ListClass;
