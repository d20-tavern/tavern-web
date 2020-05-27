class AttributeField extends React.component {
	render() {
		return (
			<button type="button" onclick={
				(e) => this.decrementAttr(this.props.name)}>-</button>
			<label>{this.props.name}: {
				this.props.value +
				this.props.base +
				this.props.inherent +
				this.props.enhance +
				this.props.misc
			}</label>
			<button type="button" onclick={
				(e) => this.incrementAttr(this.props.name)}>+</button>
		);
	}

	decrementAttr(attr) {
		super(attr);
	}

	incrementAttr(attr) {
		super(attr);
	}
}
