import React from 'react';

export default class HealthField extends React.Component {
	render() {
		return (
			<label>{this.props.name}: <input type="number" 
				max={this.props.maxValue}
				min={0}
				value={this.props.value}
				/> / {this.props.maxValue}
			</label>
		);
	}
}
