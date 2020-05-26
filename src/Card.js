import React from 'react';

import './Card.css';

class CardClass extends React.Component {
	static defaultProps = {
		title: "Card",
		content: "Default Card",
	};

	render() {
		return (
			<div className="Card List-cards" key={this.props.key_}>
				<button type='button'>delete</button>
				<h3>{this.props.title}</h3>
				<p>{this.props.content}</p>
			</div>
		);
	}
}

export default CardClass;
