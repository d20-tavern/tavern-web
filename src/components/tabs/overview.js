import React from 'react';

import AttributeField from "../fields/attribute.js";
import TextField from "../fields/text.js";
import HealthField from "../fields/health.js";

export default class OverviewTab extends React.Component {
	render() {
		return (
			<div>
				<div>
					<TextField
						name="Name"
						value={this.props.characterName}
					/><br/>
					<label>Race: {this.props.race}</label><br/>
					<label>Level: {this.props.level}</label><br/>
					<TextField
						name="Alignment"
						value={this.props.alignment}
					/><br/>
				</div>

				<br/>

				<div>
					<HealthField
						name="HP"
						value={this.props.currentHealth}
						maxValue={this.props.maxHealth}
					/><br/>
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
					/><br/>
					<AttributeField 
						name="Dexterity" 
						value={this.props.dexVal}
						base={this.props.dexBase}
						inherent={this.props.dexInherent}
						enhance={this.props.dexEnhance}
						misc={this.props.dexMisc}
					/><br/>
					<AttributeField 
						name="Constitution" 
						value={this.props.conVal}
						base={this.props.conBase}
						inherent={this.props.conInherent}
						enhance={this.props.conEnhance}
						misc={this.props.conMisc}
					/><br/>
					<AttributeField 
						name="Intelligence" 
						value={this.props.intVal}
						base={this.props.intBase}
						inherent={this.props.intInherent}
						enhance={this.props.intEnhance}
						misc={this.props.intMisc}
					/><br/>
					<AttributeField 
						name="Wisdom"
						value={this.props.wisdomVal}
						base={this.props.wisdomBase}
						inherent={this.props.wisdomInherent}
						enhance={this.props.wisdomEnhance}
						misc={this.props.wisdomMisc}
					/><br/>
					<AttributeField 
						name="Charisma" 
						value={this.props.charismaVal}
						base={this.props.strengthBase}
						inherent={this.props.strengthInherent}
						enhance={this.props.strengthEnhance}
						misc={this.props.charismaMisc}
					/><br/>
				</div>

				<br/>

				<div>
					<TextField
						name="Description"
						value={this.props.description}
					/><br/>
					<TextField
						name="Backstory"
						value={this.props.backstory}
					/><br/>
				</div>
			</div>
		);
	}
}
