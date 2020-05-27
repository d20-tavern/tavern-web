import "../fields/attribute.js"
import "../fields/text.js
import "../fields/health.js"

class OverviewTab extends React.component {
	render() {
		return (

			//Character Overview Fields
			<div>
				<TextField
					name="Name"
					value={this.props.characterName}
				/>
				<label>Race: {this.props.race}</label>
				<label>Level: {this.props.level}</label>
				<TextField
					name="Alignment"
					value={this.props.alignment}
				/>
			</div>

			//HP field
			<div>
				<HealthField
					name="HP"
					value={this.props.currentHealth}
					maxValue={this.props.maxHealth}
				/>
			</div>

			//Character Attribute Fields
			<div>
				<AttributeField
					name="Strength" 
					value={this.props.strengthVal}
					base={this.props.strengthBase}
					inherent={this.props.strengthInherent}
					enhance={this.props.strengthEnhance}
					misc={this.props.strengthMisc}
				/>
				<AttributeField 
					name="Dexterity" 
					value={this.props.dexVal}
					base={this.props.dexBase}
					inherent={this.props.dexInherent}
					enhance={this.props.dexEnhance}
					misc={this.props.dexMisc}
				/>
				<AttributeField 
					name="Constitution" 
					value={this.props.conVal}
					base={this.props.conBase}
					inherent={this.props.conInherent}
					enhance={this.props.conEnhance}
					misc={this.props.conMisc}
				/>
				<AttributeField 
					name="Intelligence" 
					value={this.props.intVal}
					base={this.props.intBase}
					inherent={this.props.intInherent}
					enhance={this.props.intEnhance}
					misc={this.props.intMisc}
				/>
				<AttributeField 
					name="Wisdom"
					value={this.props.wisdomVal}
					base={this.props.wisdomBase}
					inherent={this.props.wisdomInherent}
					enhance={this.props.wisdomEnhance}
					misc={this.props.wisdomMisc}
				/>
				<AttributeField 
					name="Charisma" 
					value={this.props.charismaVal}
					base={this.props.strengthBase}
					inherent={this.props.strengthInherent}
					enhance={this.props.strengthEnhance}
					misc={this.props.charismaMisc}
				/>
			</div>

			//Additional text fields
			<div>
				<TextField
					name="Description"
					value={this.props.description}
				/>
				<TextField
					name="Backstory"
					value={this.props.backstory}
				/>
			</div>
		);
	}

	//all of these functions are dealing with attributes they don't actually own -
	//so we propogate them upwards to the main component to deal with.
	decrementAttr(attr) {
		super(attr);
	}
	incrementAttr(attr) {
		super(attr);
	}
}
