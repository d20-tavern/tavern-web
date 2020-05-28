import React from 'react';

export default class TextField extends React.Component {
	render() {
		return (
			<>
				<label>{this.props.name}:</label>
				<input type="text" defaultValue={this.props.value}/>
			</>
		);
	}
}
