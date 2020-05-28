import React from 'react';

export default class AttackField extends React.Component {
	render() {
		return (
			<label>{this.props.name}: {
				this.props.bab +
				this.props.attr +
				this.props.enhance +
				this.props.misc
			}</label>
		);
	}

}
