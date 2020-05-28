import React from 'react';

export default class AttributeField extends React.Component {
	render() {
		return (
			<>
				<button type="button" onClick={() => {this.props.dec(this.props.name)}}>-</button>
				<button type="button" onClick={() => {this.props.inc(this.props.name)}}>+</button>
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
