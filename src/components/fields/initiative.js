import React from 'react';

export default class InitiativeField extends React.Component {
	render() {
		var modBracketSize = 2;
		var avgVal = 10;
		var baseline = avgVal / modBracketSize;

		var dexMod = Math.floor(this.props.dex/modBracketSize) - baseline;
		dexMod = (dexMod < this.props.maxDex ? dexMod : this.props.maxDex);

		return (
			<label>Initiative: {
				dexBonus +
				this.props.impr ? 3:0 +
				this.props.misc
			}</label>
		);
	}
}
