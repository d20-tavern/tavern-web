import React from 'react';

class ArmorField extends React.Component {

	render() {
		var baseArmor = 10;
		return (
			<>
				<label>AC: {
					this.props.armor +
					this.props.shield +
					this.props.dex +
					this.props.dodge +
					this.props.natural +
					this.props.deflect +
					this.props.size +
					this.props.misc +
					baseArmor
				}</label>
				<label>Touch: {
					this.props.dex +
					this.props.dodge +
					this.props.deflect +
					this.props.size +
					this.props.misc +
					baseArmor
				}</label>
				<label>Flat-Footed: {
					this.props.armor +
					this.props.shield +
					this.props.natural +
					this.props.deflect +
					this.props.size +
					this.props.misc +
					baseArmor
				}</label>
			</>
		);
	}
}
