import React from 'react';

export default class TextField extends React.Component {
	render() {
		return (
			<label>{this.props.name}:<input type="text" value={this.props.value}/></label>
		);
	}
}
