import React from 'react';

export default class SaveField extends React.Component {
	render() {
		return (
			<label>{this.props.name}: {
				this.props.classMod +
				this.props.mod +
				this.props.enhance +
				this.props.misc
			}</label>
		);
	}
}
