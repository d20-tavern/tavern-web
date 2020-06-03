import React from 'react';

export default class MoneyField extends React.Component {
	render() {
		return (
			<div display="flex">
				<label>Platinum: </label>
				<input type="number" 
					min={0}
					defaultValue={this.props.platinum}
					onChange={e => {this.props.updateMoney(e.target.value, 'p')}}
				/><br/>

				<label>Gold: </label>
				<input type="number" 
					min={0}
					defaultValue={this.props.gold}
					onChange={e => {this.props.updateMoney(e.target.value, 'g')}}
				/><br/>

				<label>Silver: </label>
				<input type="number" 
					min={0}
					defaultValue={this.props.silver}
					onChange={e => {this.props.updateMoney(e.target.value, 's')}}
				/><br/>

				<label>Copper: </label>
				<input type="number" 
					min={0}
					defaultValue={this.props.copper}
					onChange={e => {this.props.updateMoney(e.target.value, 'c')}}
				/><br/>
				
				<br/>

				<label>Total wealth: {	(parseInt(this.props.platinum)*1000) +
										(parseInt(this.props.gold)*100) +
										(parseInt(this.props.silver)*10) +
										parseInt(this.props.copper)} CP Worth</label>
			</div>
		);
	}
}
