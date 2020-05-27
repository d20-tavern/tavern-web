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
				<button type="button" onclick="decrementStrength()">-</button>
				<AttributeField
					name="Strength" 
					value={this.props.strengthVal}
					bonus={this.props.strengthBonus}
				/>
				<button type="button" onclick="incrementStrength()">+</button>

				<button type="button" onclick="decrementDex()">-</button>
				<AttributeField 
					name="Dexterity" 
					value={this.props.dexVal}
					bonus={this.props.dexBonus}
				/>
				<button type="button" onclick="incrementDex()">+</button>

				<button type="button" onclick="decrementCon()">-</button>
				<AttributeField 
					name="Constitution" 
					value={this.props.conVal}
				bonus={this.props.conBonus}
				/>
				<button type="button" onclick="incrementCon()">+</button>

				<button type="button" onclick="decrementInt()">-</button>
				<AttributeField 
					name="Intelligence" 
					value={this.props.intVal}
					bonus={this.props.intBonus}
				/>
				<button type="button" onclick="incrementInt()">+</button>

				<button type="button" onclick="decrementWisdom()">-</button>
				<AttributeField 
					name="Wisdom"
					value={this.props.wisdomVal}
					bonus={this.props.wisdomBonus}
				/>
				<button type="button" onclick="incrementWisdom()">+</button>
	
				<button type="button" onclick="decrementCharisma()">-</button>
				<AttributeField 
					name="Charisma" 
					value={this.props.charismaVal}
					bonus={this.props.charismaBonus}
				/>
				<button type="button" onclick="incrementCharisma()">+</button>
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
	//
	//TODO: maybe roll these into the field components?
	decrementStrength() {
		super();
	}
	incrementStrength() {
		super();
	}
	decrementDex() {
		super();
	}
	decrementDex() {
		super();
	}
	decrementCon() {
		super();
	}
	decrementCon() {
		super();
	}
	decrementInt() {
		super();
	}
	decrementInt() {
		super();
	}
	decrementWisdom() {
		super();
	}
	decrementWisdom() {
		super();
	}
	decrementCharisma() {
		super();
	}
	decrementCharisma() {
		super();
	}
}
