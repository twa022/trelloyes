import React from 'react';

import './List.css';
import './Card.js';

class ListClass extends React.Component {
	static defaultProps = {
		header: "List Header",
		cards: [],
	};


	render() {
		return (
			<section className="List">
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
