class SaveField extends React.component {
	render() {
		return (
			<label>{this.props.name}: {
				this.props.classMod +
				this.props.mod +
				this.props.enhance +
				this.props.misc
			}</label>
		);
}
