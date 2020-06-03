import React from 'react';

export default class AttributeField extends React.Component {
	render() {
		return (
			<>
				<label>Total {this.props.name}: {
					parseInt(this.props.value) +
					this.props.base +
					this.props.inherent +
					this.props.enhance +
					this.props.misc
				}<br/>
				
				Base {this.props.name}: 
				<input
					type="number" 
					defaultValue={this.props.value} 
					min={1} 
					max={20} 
					onChange={e => {this.props.update(this.props.name, e.target.value)}}
				/></label>
			</>
		);
	}
}
