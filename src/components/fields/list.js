import React from 'react';

export default class ListField extends React.Component {
	render() {
		return (
			<>
				<label>{this.props.name} List</label><br/>
					<div display="flex">
						<div>
							<label>{this.props.name} I Have</label><br/>
							<select multiple="multiple" size={10} id={"charHas" + this.props.name}>
								{Object.keys(this.props.hadItems).map((listItem) => {
									return(<option value={listItem}>{listItem.name}, {listItem.quantity} {listItem.metric}</option>);
								})}
							</select>
						</div>

						<div>
							<button type="button" display="block" onClick={this.props.addItems(this.props.name)}>Add from Available</button>
							<button type="button" display="block" onClick={this.props.removeItems(this.props.name)}>Remove from Owned</button>
						</div>

						<div>
							<label>Available {this.props.name}</label><br/>
							<select multiple="multiple" size={10} id={"charAvailable" + this.props.name}>
								{Object.keys(this.props.availableItems).map((listItem) => {
									return(<option value={listItem}>{listItem.name}</option>);
								})}
							</select>
						</div>
					</div>
			</>
		);
	}


}
