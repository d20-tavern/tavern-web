import React from 'react';

export default class TextField extends React.Component {
	render() {
		return (
			<>
				<label>{this.props.name}:</label>
				<input 
					type="text" 
					defaultValue={this.props.value}
					onChange={e => {this.props.ch(this.props.name, e.target.value)}}
				/>
			</>
		);
	}
}
