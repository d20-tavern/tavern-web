class HealthField extends React.component {
	render() {
		return (
			<label>{this.props.name}: <input type="number" 
				max={this.props.maxValue}
				min=0
				value={this.props.value}
				onchange=updateHealth({this.value})
				/> / {this.props.maxValue}
			</label>
		);
	}

	updateHealth() {
		super();
	}
}
