import React from 'react';

export default class AttributeField extends React.Component {
	render() {
		return (
			<>
				<button type="button">-</button>
				<button type="button">+</button>
				<label>{this.props.name}: {
					this.props.value +
					this.props.base +
					this.props.inherent +
					this.props.enhance +
					this.props.misc
				}</label>
			</>
		);
	}
}
