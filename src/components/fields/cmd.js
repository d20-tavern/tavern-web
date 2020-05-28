import React from 'react';

export default class CMDField extends React.Component {
	render() {
		var baseCmd = 10;
		return (
			<label>CMD: {
				this.props.bab +
				this.props.strength +
				this.props.dex +
				this.props.deflect +
				this.props.dodge +
				this.props.size +
				this.props.bonus +
				baseCmd
			}</label>
		);
	}
}
