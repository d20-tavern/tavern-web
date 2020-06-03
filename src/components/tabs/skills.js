import React from 'react';

import SkillField from "../fields/skill.js";

export default class SkillsTab extends React.Component {
	render() {
		return (
			<>
				<label> Max ranks: {this.props.level}</label><br/>

				<SkillField
					name="Acrobatics"
					attr={this.props.dexVal}

					allRanks={this.props.skillRanks}

					armorPenalty={this.props.armorPenalty}
					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Appraise"
					attr={this.props.intVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Bluff"
					attr={this.props.charismaVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Climb"
					attr={this.props.strengthVal}

					allRanks={this.props.skillRanks}

					armorPenalty={this.props.armorPenalty}
					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Diplomacy"
					attr={this.props.charismaVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Disable Device"
					attr={this.props.dexVal}

					allRanks={this.props.skillRanks}

					armorPenalty={this.props.armorPenalty}
					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Disguise"
					attr={this.props.charismaVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Escape Artist"
					attr={this.props.dexVal}

					allRanks={this.props.skillRanks}

					armorPenalty={this.props.armorPenalty}
					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Fly"
					attr={this.props.dexVal}

					allRanks={this.props.skillRanks}

					armorPenalty={this.props.armorPenalty}
					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Handle Animal"
					attr={this.props.charismaVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Heal"
					attr={this.props.wisdomVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Intimidate"
					attr={this.props.charismaVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Knowledge: Arcana"
					attr={this.props.intVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Knowledge: Nobility"
					attr={this.props.intVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Knowledge: Planes"
					attr={this.props.intVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Knowledge: History"
					attr={this.props.intVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Knowledge: Religion"
					attr={this.props.intVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Knowledge: Local"
					attr={this.props.intVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Linguistics"
					attr={this.props.intVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Perception"
					attr={this.props.wisdomVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Perform"
					attr={this.props.charismaVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Ride"
					attr={this.props.dexVal}

					allRanks={this.props.skillRanks}

					armorPenalty={this.props.armorPenalty}
					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Sense Motive"
					attr={this.props.wisdomVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Sleight of Hand"
					attr={this.props.dexVal}

					allRanks={this.props.skillRanks}

					armorPenalty={this.props.armorPenalty}
					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Spellcraft"
					attr={this.props.intVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Stealth"
					attr={this.props.dexVal}

					allRanks={this.props.skillRanks}

					armorPenalty={this.props.armorPenalty}
					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Survival"
					attr={this.props.wisdomVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Swim"
					attr={this.props.strengthVal}

					allRanks={this.props.skillRanks}

					armorPenalty={this.props.armorPenalty}
					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
				<SkillField
					name="Use Magic Device"
					attr={this.props.charismaVal}

					allRanks={this.props.skillRanks}

					level={this.props.level}
					update={this.props.updateSkill}
				/><br/>
			</>
		);
	}
}
