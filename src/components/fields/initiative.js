class InitiativeField extends React.component {
	render() {
		return (
			<label>Initiative: {
				this.props.dex +
				(this.props.impr ? 3:0) +
				this.props.misc
			}</label>
		);
	}
}