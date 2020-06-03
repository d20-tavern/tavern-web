import React from 'react';

export default class SkillField extends React.Component {
	render() {
		var modBracketSize = 2;
		var avgVal = 10;
		var baseline = avgVal / modBracketSize;

		var attrMod = Math.floor(this.props.attr/modBracketSize) - baseline;

		var armorPenalty = 0;
		if(this.props.armorPenalty) armorPenalty = this.props.armorPenalty;

		var ranks = (this.props.allRanks[this.props.name] === undefined) ? 0 : this.props.allRanks[this.props.name];
		return (
			<>
				<label>{this.props.name}: {
					attrMod +
					ranks +
					((this.props.isClassSkill && this.props.ranks > 0) ? 3 : 0) +
					+ armorPenalty
				}<br/>
				
				Ranks: <input
					type="number"
					min={0}
					max={this.props.level}
					defaultValue={ranks}
					onChange={e => {this.props.update(this.props.name, e.target.value)}}
				/>
			</label>
			</>
		);
	}
}
