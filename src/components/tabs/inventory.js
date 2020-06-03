import React from 'react';

import MoneyField from "../fields/money.js";
import ListField from "../fields/list.js";

export default class InventoryTab extends React.Component {
	render() {
		return (
			<div>
				<MoneyField
					platinum={this.props.platinum}
					gold={this.props.gold}
					silver={this.props.silver}
					copper={this.props.copper}
					updateMoney={this.props.updateMoney}
				/>

				<br/>

				<ListField
					name="Items"
					hadItems={this.props.charItems}
					availableItems={this.props.availableItems}
					addItems={this.props.addToList}
					removeItems={this.props.removeFromList}
				/>
			</div>
		);
	}
}
