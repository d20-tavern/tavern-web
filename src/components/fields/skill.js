class SkillField extends React.component {
	render() {
		return (
			<label>{this.props.name}:<input type="text" value={
				this.props.ranks +
				this.props.attrMod +
				this.props.misc +
				({this.props.isClassSkill} ? 3:0)
			}/></label>
		);
	}
}
