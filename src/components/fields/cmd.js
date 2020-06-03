import React from 'react';

export default class CMDField extends React.Component {
	render() {
		var baseCmd = 10;

		var modBracketSize = 2;
		var avgVal = 10;
		var baseline = avgVal / modBracketSize;

		var strengthMod = Math.floor(this.props.strength/modBracketSize) - baseline;
		
		var dexMod = Math.floor(this.props.dex/modBracketSize) - baseline;
		dexMod = (dexMod < this.props.maxDex ? dexMod : this.props.maxDex); 

		return (
			<label>CMD: {
				this.props.bab +
				strengthMod +
				dexMod +
				this.props.deflect +
				this.props.dodge +
				this.props.size +
				this.props.misc +
				baseCmd
			}</label>
		);
	}
}
