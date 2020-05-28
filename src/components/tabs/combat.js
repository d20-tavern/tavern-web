import "../fields/attribute.js"
import "../fields/health.js"
import "../fields/armor.js"
import "../fields/cmd.js"
import "../fields/save.js"
import "../fields/initiative.js"

class CombatTab extends React.component {
	render() {
		return (
			//Defensive Stats
			<div>
				<HealthField
					name="HP"
					value={this.props.currentHealth}
					maxValue={this.props.maxHealth}
				/>
				<ArmorField
					//AC fields
					armor={this.props.armorAc}
					shield={this.props.shieldAc}
					deflect={this.props.deflectAc}
					natural={this.props.naturalAc}
					dodge={this.props.dodgeAc}
					dex={this.props.dexMod}
					size={this.props.sizeAc}
					misc={this.props.miscAc}
				/>
				<CMDField
					bab={this.props.bab}
					strength={this.props.strengthMod}
					dex={this.props.dexMod}
					deflect={this.props.deflectAc}
					dodge={this.props.dodgeAc}
					size={this.props.sizeAc}
					misc={this.props.miscAc}
				/>
				<label>Spell Resistance: {this.props.sr}</label>
				//TODO: DR
			</div>

			//saves
			<div>
				<SaveField
					name="Fortitude"
					classMod={this.props.classFortSave}
					mod={this.props.conMod}
					enhance={this.props.fortEnhance}
					misc={this.props.fortMisc}
				/>
				<SaveField
					name="Reflex"
					class={this.props.classReflexSave}
					mod={this.props.dexMod}
					enhance={this.props.reflexEnhance}
					misc={this.props.reflexMisc}
				/>
				<SaveField
					name="Will"
					class={this.props.classWillSave}
					mod={this.props.wisdomMod}
					enhance={this.props.willEnhance}
					misc={this.props.willMisc}
				/>
			</div>

			//Offensive Stats
			<div>
				<InitiativeField
					dex={this.props.dexMod}
					impr={this.props.improvedInit}
					misc={this.props.initMod}
				/>
				<label>Speed: {this.props.moveSpeed}</label>

				<AttackField
					name="Melee"
					bab={this.props.bab}
					attr={this.props.strengthMod}
					enhance={this.props.meleeEnhance}
					misc={this.props.attackMisc}
				/>
				<AttackField
					name="Ranged"
					bab={this.props.bab}
					attr={this.props.dexMod}
					enhance={this.props.rangedEnhance}
					misc={this.props.attackMisc}
				/>
				<AttackField
					name="CMB"
					bab={this.props.bab}
					attr={this.props.strengthMod}
					enhance={this.props.cmbEnhance}
					misc={this.props.attackMisc}
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
		);
	}
}
