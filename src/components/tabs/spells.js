import React from 'react';

import ListField from "../fields/list.js";

export default class SpellsTab extends React.Component {
	render() {
		return (
			<div>
				<label>Spell Slots</label>
				<ul>
					<li>Level 0 Spell Slots: {this.props.lv0Slots}</li>
					<li>Level 1 Spell Slots: {this.props.lv1Slots}</li>
					<li>Level 2 Spell Slots: {this.props.lv2Slots}</li>
					<li>Level 3 Spell Slots: {this.props.lv3Slots}</li>
					<li>Level 4 Spell Slots: {this.props.lv4Slots}</li>
					<li>Level 5 Spell Slots: {this.props.lv5Slots}</li>
					<li>Level 6 Spell Slots: {this.props.lv6Slots}</li>
					<li>Level 7 Spell Slots: {this.props.lv7Slots}</li>
					<li>Level 8 Spell Slots: {this.props.lv8Slots}</li>
					<li>Level 9 Spell Slots: {this.props.lv9Slots}</li>
				</ul>

				<ListField
					name="Cantrips"
					hadItems={this.props.charCantrips}
					availableItems={this.props.availableCantrips}
					addItems={this.props.addToList}
					removeItems={this.props.removeFromList}
				/>

				<br/>

				<ListField
					name="Spells"
					hadItems={this.props.charSpells}
					availableItems={this.props.availableSpells}
					addItems={this.props.addToList}
					removeItems={this.props.removeFromList}
				/>

				<br/>

				<ListField
					name="Feats"
					hadItems={this.props.charFeats}
					availableItems={this.props.availableFeats}
					addItems={this.props.addToList}
					removeItems={this.props.removeFromList}
				/>
			</div>
		);
	}
}
