import React from 'react';

export default class ListField extends React.Component {
	constructor(props) {
		super(props);
		this.listBox = React.createRef();
	}
	render() {
		return (
			<>
				<label>{this.props.name} List</label><br/>
					<div display="flex">
						<div>
							<label>{this.props.name} I Have</label><br/>
							<select disabled multiple="multiple" size={10}>
								{Object.keys(this.props.hadItems).map((listItem) => {
									return(<option value={listItem}>{listItem.name}, {listItem.quantity} {listItem.metric}</option>);
								})}
							</select>
						</div>

						<div>
							<button type="button" display="block" onClick={(e) => (this.props.addItems(this.props.name, this.listBox))}>Add To Owned</button>
							<button type="button" display="block" onClick={(e) => (this.props.removeItems(this.props.name, this.listBox))}>Remove From Owned</button>
						</div>

						<div>
							<label>Available {this.props.name}</label><br/>
							<select multiple="multiple" size={10} ref={this.allBox}>
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
