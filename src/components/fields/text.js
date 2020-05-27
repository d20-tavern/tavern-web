class TextField extends React.component {
	render() {
		return (
			<label>{this.props.name}:<input type="text" value={this.props.value} onchange=textChange({this.props.name})/></label>
		);
	}

	textChange(field) {
		super(field);
	}
}
