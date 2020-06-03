import React from 'react';

import ListField from "../fields/list.js";

export default class SpellsTab extends React.Component {
	render() {
		return (
			<div>
				<ListField
					name="Class"
					hadItems={this.props.charClassLevels}
					availableItems={this.props.availableClassLevels}
					addItems={this.props.addToList}
					removeItems={this.props.removeFromList}
				/>
			</div>
		);
	}
}
