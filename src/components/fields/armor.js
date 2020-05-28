import React from 'react';

export default class ArmorField extends React.Component {

	render() {
		var baseArmor = 10;

		//I'm writing it this way in case we ever repurpose this code.
		//Ensure avgVal is evenly divisible by modBracketSize,
		//weird bracketing behavior happens otherwise.
		var modBracketSize = 2;
		var avgVal = 10;
		var baseline = avgVal / modBracketSize;

		var dexMod = Math.floor(this.props.dex/modBracketSize) - baseline;
		var dexBonus = dexMod < this.props.maxDex ? dexMod : this.props.maxDex; 

		return (
			<div>
				<label>AC: {
						this.props.armor +
						this.props.shield +
						dexBonus +
						this.props.dodge +
						this.props.natural +
						this.props.deflect +
						this.props.size +
						this.props.misc +
						baseArmor
				}</label><br/>
				<label>Touch: {
						dexBonus +
						this.props.dodge +
						this.props.deflect +
						this.props.size +
						this.props.misc +
						baseArmor
				}</label><br/>
				<label>Flat-Footed: {
						this.props.armor +
						this.props.shield +
						this.props.natural +
						this.props.deflect +
						this.props.size +
						this.props.misc +
						baseArmor
				}</label><br/>
			</div>
		);
	}
}
