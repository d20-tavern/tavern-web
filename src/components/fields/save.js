import React from 'react';

export default class SaveField extends React.Component {
	render() {
		var modBracketSize = 2;
		var avgVal = 10;
		var baseline = avgVal / modBracketSize;

		var attrMod = Math.floor(this.props.attr/modBracketSize) - baseline;
		if(this.props.maxDex) {
			attrMod = (attrMod < this.props.maxDex ? attrMod : this.props.maxDex); 
		}

		return (
			<label>{this.props.name}: {
				this.props.classMod +
				attrMod +
				this.props.enhance +
				this.props.misc
			}</label>
		);
	}
}
