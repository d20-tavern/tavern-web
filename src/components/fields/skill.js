import React from 'react';

export default class SkillField extends React.Component {
	render() {
		var modBracketSize = 2;
		var avgVal = 10;
		var baseline = avgVal / modBracketSize;

		var attrMod = Math.floor(this.props.attr/modBracketSize) - baseline;

		var armorPenalty = 0;
		if(this.props.armorPenalty) armorPenalty = this.props.armorPenalty;

		return (
			<>
				<button type="button">-</button>
				<button type="button">+</button>
				<label>{this.props.name}: {
					attrMod +
					this.props.ranks +
					((this.props.isClassSkill && this.props.ranks > 0) ? 3 : 0) +
					+ armorPenalty
				}</label>
			</>
		);
	}
}
