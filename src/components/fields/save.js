import React from 'react';

export default class SaveField extends React.Component {
	render() {
		var modBracketSize = 2;
		var avgVal = 10;
		var baseline = avgVal / modBracketSize;

		var attrMod = Math.floor(this.props.attr/modBracketSize) - baseline;
		var attrBonus;
		if(this.props.maxDex) {
			attrBonus = (attrMod < this.props.maxDex ? attrMod : this.props.maxDex); 
		} else attrBonus = attrMod;

		return (
			<label>{this.props.name}: {
				this.props.classMod +
				attrBonus +
				this.props.enhance +
				this.props.misc
			}</label>
		);
	}
}
