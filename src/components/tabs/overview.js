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
						value={this.props.name}
						ch={this.props.chText}
					/><br/>
					<TextField
						name="Race"
						value={this.props.race}
						ch={this.props.chText}
					/><br/>
					{/*
					<label>Level: {this.props.level}</label><br/>
					*/}
					<TextField
						name="Alignment"
						value={this.props.alignment}
						ch={this.props.chText}
					/><br/>
				</div>

				<br/>

				<div>
					<HealthField
						name="Max HP"
						value={this.props.maxHealth}
						ch={this.props.chMaxHealth}
					/><br/>
				</div>
	
				<br/>

				<div>
					<AttributeField
						name="Strength" 
						value={this.props.strengthVal}
						base={this.props.strengthBase}
						inherent={this.props.strengthInherent}
						enhance={this.props.strengthEnhance}
						misc={this.props.strengthMisc}
						update={this.props.updateAttr}
					/><br/>
					<AttributeField 
						name="Dexterity" 
						value={this.props.dexVal}
						base={this.props.dexBase}
						inherent={this.props.dexInherent}
						enhance={this.props.dexEnhance}
						misc={this.props.dexMisc}
						update={this.props.updateAttr}
					/><br/>
					<AttributeField 
						name="Constitution" 
						value={this.props.conVal}
						base={this.props.conBase}
						inherent={this.props.conInherent}
						enhance={this.props.conEnhance}
						misc={this.props.conMisc}
						update={this.props.updateAttr}
					/><br/>
					<AttributeField 
						name="Intelligence" 
						value={this.props.intVal}
						base={this.props.intBase}
						inherent={this.props.intInherent}
						enhance={this.props.intEnhance}
						misc={this.props.intMisc}
						update={this.props.updateAttr}
					/><br/>
					<AttributeField 
						name="Wisdom"
						value={this.props.wisdomVal}
						base={this.props.wisdomBase}
						inherent={this.props.wisdomInherent}
						enhance={this.props.wisdomEnhance}
						misc={this.props.wisdomMisc}
						update={this.props.updateAttr}
					/><br/>
					<AttributeField 
						name="Charisma" 
						value={this.props.charismaVal}
						base={this.props.charismaBase}
						inherent={this.props.charismaInherent}
						enhance={this.props.charismaEnhance}
						misc={this.props.charismaMisc}
						update={this.props.updateAttr}
					/><br/>
				</div>

				<br/>

				<div>
					<TextField
						name="Description"
						value={this.props.description}
						ch={this.props.chText}
					/><br/>
					<TextField
						name="Backstory"
						value={this.props.backstory}
						ch={this.props.chText}
					/><br/>
				</div>
			</div>
		);
	}
}
