import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactModal from 'react-modal';
import 'react-tabs/style/react-tabs.css';

import OverviewTab from './components/tabs/overview.js'
import CombatTab from './components/tabs/combat.js'
import SkillsTab from './components/tabs/skills.js'

export default class App extends React.Component {
	constructor(props) {
		super(props);

		//bind functions
		this.incrementAttribute = this.incrementAttribute.bind(this);
		this.decrementAttribute = this.decrementAttribute.bind(this);
		this.incrementSkill = this.incrementSkill.bind(this);
		this.decrementSkill = this.decrementSkill.bind(this);
		this.changeText = this.changeText.bind(this);
		this.changeHealth = this.changeHealth.bind(this);

		/*TODO: ALL of this is placeholder info, just to check math and logic.
		 * Every single value here will need to be replaced with data nabbed from the server.
		 * However, for right now, this will function for testing.
		 */
		this.state = {
			charName: "John Doe",
			charRace: "Human",
			charLevel: 1,
			charAlignment: "True Neutral",
			charGender: "Male",

			charDescription: "Very generic.",
			charBackstory: "Not much to speak of.",

			currentHealth: 50,
			maxHealth: 50,

			strengthVal: 16,
			dexVal: 12,
			conVal: 12,
			intVal: 10,
			wisdomVal: 8,
			charismaVal: 10,

			strengthBase: 0,
			dexBase: 0,
			conBase: 0,
			intBase: 0,
			wisdomBase: 0,
			charismaBase: 0,

			strengthInherent: 0,
			dexInherent: 0,
			conInherent: 0,
			intInherent: 0,
			wisdomInherent: 0,
			charismaInherent: 0,

			strengthEnhance: 0,
			dexEnhance: 0,
			conEnhance: 0,
			intEnhance: 0,
			wisdomEnhance: 0,
			charismaEnhance: 0,

			strengthMisc: 0,
			dexMisc: 0,
			conMisc: 0,
			intMisc: 0,
			wisdomMisc: 0,
			charismaMisc: 0,

			armorAc: 5,
			shieldAc: 3,
			sizeAc: 0,
			dodgeAc: -1,
			deflectAc: 1,
			naturalAc: 0,
			miscAc: 0,

			sr: 0,

			classFortSave: 5,
			classReflexSave: 3,
			classWillSave: 2,

			fortEnhance: 0,
			reflexEnhance: 0,
			willEnhance: 0,

			fortMisc: 0,
			reflexMisc: 0,
			willMisc: 0,

			bab: 3,

			meleeEnhance: 0,
			rangedEnhance: 0,
			cmbEnhance: 0,

			meleeMisc: 0,
			rangedMisc: 0,
			cmbMisc: 0,

			improvedInit: true,
			initMod: 0,

			maxDex: 3,
			armorPenalty: -3,
			spellFailure: 25,

			moveSpeed: 20,

			lv1SpellSlots: 0,
			lv2SpellSlots: 0,
			lv3SpellSlots: 0,
			lv4SpellSlots: 0,
			lv5SpellSlots: 0,
			lv6SpellSlots: 0,
			lv7SpellSlots: 0,
			lv8SpellSlots: 0,
			lv9SpellSlots: 0,

			isPreparedCaster: false,

			spells: Spell[],
			feats: Feat[],
			items: Item[],

		};
	}

	changeAttribute(name, value) {
		if(value > 0 && <= 20) {
			switch(name) {
				case "Strength":
					this.setState({strengthVal: value});
					break;

				case "Dexterity":
					this.setState({dexVal: value});
					break;

				case "Constitution":
					this.setState({conVal: value});
					break;

				case "Intelligence":
						this.setState({intVal: value});
					break;

				case "Wisdom":
						this.setState({wisdomVal: value});
					break;

				case "Charisma":
						this.setState({charismaVal: value});
					break;
		}
	}

	changeSkill(name, value) {
	}

	changeText(name, value) {
		switch(name) {
			case "Name":
				this.setState({
					charName: value
				});
				break;
			case "Alignment":
				this.setState({
					charAlignment: value
				});
				break;
			case "Description":
				this.setState({
					charDescription: value
				});
				break;
			case "Backstory":
				this.setState({
					charBackstory: value
				});
				break;
		}
	}

	changeHealth(value) {
		this.setState({
			currentHealth: value
		});
	}

	render() {
		return (
			<TabList>
				<Tab>Menu</Tab>
				<Tab>Overview</Tab>
				<Tab>Combat</Tab>
				<Tab>Skills</Tab>
				<Tab>Spells</Tab>
				<Tab>Inventory</Tab>
				<Tab>Levels</Tab>
			</TabList>
			<Tabs>
				<TabPanel>
					<button type="button" onClick={() => setAccount(true)}>Account</button>
					<button type="button" onClick={() => setCharacters(true)}>Characters</button>
					{/*
					<button type="button" onClick={() => setSettings(true)}>Settings</button>
					<button type="button" onClick={() => setTerms(true)}>Terms of Service</button>
					*/}
					<button type="button" onClick={() => setHelp(true)}>Help</button>

					<ReactModal isOpen={account}>
						<button type="button" onClick={() => setAccount(false)}>X</button>
						<div>
							<label>
								<p>
									Username:
									<input type="text" name="name"/>
								</p>
							</label>
					
							<label>
								<p>
									Password:
									<input type="text" name="race"/>
								</p>
							</label>
							<button type="button">ENTER</button>
						</div>
					</ReactModal>
					<ReactModal isOpen={characters}>
						<button type="button" onClick={() => setCharacters(false)}>X</button>
						<p>List of characters, and the ability to pick or delete one</p>
						<button type="button">+</button>
					</ReactModal>
					<ReactModal isOpen={settings}>
						<button type="button" onClick={() => setSettings(false)}>X</button>
						<p>No settings</p>
					</ReactModal>
					<ReactModal isOpen={terms}>
						<button type="button" onClick={() => setTerms(false)}>X</button>
						<p>TBD</p>
					</ReactModal>
					<ReactModal isOpen={help}>
						<button type="button" onClick={() => setHelp(false)}>X</button>
						<p>an overview of every tab and what it does as well as contact information at the end in the form of our emails</p>
					</ReactModal>
				</TabPanel>

				<TabPanel>
					<button type="button">Account</button>
					<button type="button">Characters</button>
					<button type="button">Settings</button>
					<button type="button">Terms of Service</button>
					<button type="button">Help</button>
				</TabPanel>

				<TabPanel>
					<OverviewTab
						name={this.state.charName}
						race={this.state.charRace}
						level={this.state.charLevel}
						alignment={this.state.charAlignment}

						currentHealth={this.state.currentHealth}
						maxHealth={this.state.maxHealth}

						strengthVal={this.state.strengthVal}
						strengthBase={this.state.strengthBase}
						strengthInherent={this.state.strengthInherent}
						strengthEnhance={this.state.strengthEnhance}
						strengthMisc={this.state.strengthMisc}

						dexVal={this.state.dexVal}
						dexBase={this.state.dexBase}
						dexInherent={this.state.dexInherent}
						dexEnhance={this.state.dexEnhance}
						dexMisc={this.state.dexMisc}
			
						conVal={this.state.conVal}
						conBase={this.state.conBase}
						conInherent={this.state.conInherent}
						conEnhance={this.state.conEnhance}
						conMisc={this.state.conMisc}

						intVal={this.state.intVal}
						intBase={this.state.intBase}
						intInherent={this.state.intInherent}
						intEnhance={this.state.intEnhance}
						intMisc={this.state.intMisc}

						wisdomVal={this.state.wisdomVal}
						wisdomBase={this.state.wisdomBase}
						wisdomInherent={this.state.wisdomInherent}
						wisdomEnhance={this.state.wisdomEnhance}
						wisdomMisc={this.state.wisdomMisc}

						charismaVal={this.state.charismaVal}
						charismaBase={this.state.charismaBase}
						charismaInherent={this.state.charismaInherent}
						charismaEnhance={this.state.charismaEnhance}
						charismaMisc={this.state.charismaMisc}

						description={this.state.charDescription}
						backstory={this.state.charBackstory}

						incAttr={this.incrementAttribute}
						decAttr={this.decrementAttribute}
						chText={this.changeText}
						chHealth={this.changeHealth}
					/>
				</TabPanel>

				<TabPanel>
					<CombatTab
						currentHealth={this.state.currentHealth}
						maxHealth={this.state.maxHealth}

						armorAc={this.state.armorAc}
						shieldAc={this.state.shieldAc}
						deflectAc={this.state.deflectAc}
						naturalAc={this.state.naturalAc}
						dodgeAc={this.state.dodgeAc}
						sizeAc={this.state.sizeAc}
						miscAc={this.state.miscAc}

						sr={this.state.sr}
						bab={this.state.bab}
						maxDex={this.state.maxDex}

						improvedInit={this.state.improvedInit}
						initMod={this.state.initMod}
						moveSpeed={this.state.moveSpeed}

						classFortSave={this.state.classFortSave}
						classReflexSave={this.state.classReflexSave}
						classWillSave={this.state.classWillSave}

						fortEnhance={this.state.fortEnhance}
						reflexEnhance={this.state.reflexEnhance}
						willEnhance={this.state.willEnhance}

						fortMisc={this.state.fortMisc}
						reflexMisc={this.state.reflexMisc}
						willMisc={this.state.willMisc}

						meleeEnhance={this.state.meleeEnhance}
						rangedEnhance={this.state.rangedEnhance}
						cmbEnhance={this.state.cmbEnhance}
			
						meleeMisc={this.state.meleeMisc}
						rangedMisc={this.state.rangedMisc}
						cmbMisc={this.state.cmbMisc}

						strengthVal={this.state.strengthVal}
						strengthBase={this.state.strengthBase}
						strengthInherent={this.state.strengthInherent}
						strengthEnhance={this.state.strengthEnhance}
						strengthMisc={this.state.strengthMisc}

						dexVal={this.state.dexVal}
						dexBase={this.state.dexBase}
						dexInherent={this.state.dexInherent}
						dexEnhance={this.state.dexEnhance}
						dexMisc={this.state.dexMisc}
			
						conVal={this.state.conVal}
						conBase={this.state.conBase}
						conInherent={this.state.conInherent}
						conEnhance={this.state.conEnhance}
						conMisc={this.state.conMisc}

						intVal={this.state.intVal}
						intBase={this.state.intBase}
						intInherent={this.state.intInherent}
						intEnhance={this.state.intEnhance}
						intMisc={this.state.intMisc}

						wisdomVal={this.state.wisdomVal}
						wisdomBase={this.state.wisdomBase}
						wisdomInherent={this.state.wisdomInherent}
						wisdomEnhance={this.state.wisdomEnhance}
						wisdomMisc={this.state.wisdomMisc}

						charismaVal={this.state.charismaVal}
						charismaBase={this.state.charismaBase}
						charismaInherent={this.state.charismaInherent}
						charismaEnhance={this.state.charismaEnhance}
						charismaMisc={this.state.charismaMisc}

						chHealth={this.changeHealth}
						incAttr={this.incrementAttribute}
						decAttr={this.decrementAttribute}
					/>
				</TabPanel>

				<TabPanel>
					<SkillsTab
						armorPenalty={this.state.armorPenalty}

						strengthVal={this.state.strengthVal}
						dexVal={this.state.dexVal}
						conVal={this.state.conVal}
						intVal={this.state.intVal}
						wisdomVal={this.state.wisdomVal}
						charismaVal={this.state.charismaVal}
					/>
				</TabPanel>

				<TabPanel>
			<div>
				<p>Cantrips:</p>
				<p>Cantrips that are avilable</p>
			</div>
			<div>
				<p>Prepared Spells:</p>
				<p>Prepared Spells that are avilable</p>
			</div>
			<div>
				<p>Active Spell Effects Abilities:</p>
				<p>Active Spell Effects that are avilable</p>
			</div>
			<h2>Spell Slots</h2>
			<div>
				Level	Max	Current
			</div>
			<div>
				Level 1:
			</div>
			<div>
				Level 2:
			</div>
			<div>
				Level 3:
			</div>
			<div>
				Level 4:
			</div>
			<div>
				Level 5:
			</div>
			<div>
				Level 6:
			</div>
			<div>
				Level 7:
			</div>
			<div>
				Level 8:
			</div>
			<div>
				Level 9:
			</div>
			<div>
				<p>Known Spells:</p>
				<p>Known Spells that are available</p>
			</div>
				</TabPanel>

				<TabPanel>
					<h3>Currency</h3>
			<div>
					Platinum:
					<input type="number" name="platinum"/>
			</div>
			<div>
					Gold:
					<input type="number" name="gold"/>
			</div>
			<div>
					Silver:
					<input type="number" name="silver"/>
			</div>
			<div>
					Copper:
					<input type="number" name="copper"/>
			</div>
			<div>
						<button type="button">-</button>
						<button type="button">+</button>
					<p>Equipment</p>
					<p>Equipment that is available</p>
			</div>
			<div>
						<button type="button">-</button>
						<button type="button">+</button>
					<p>Bags</p>
					<p>Bags that are available</p>
			</div>
				</TabPanel>

				<TabPanel>
					<button type="button">Change</button>
				<p>Classes and levels</p>
				</TabPanel>
			</Tabs>
		);
	}
		<div>
			<p>Languages: <button type="button" onClick={() => setLanguages(true)}>Edit</button></p>
			<p>Languages that are avilable</p>
		</div>
		<ReactModal isOpen={languages}>
		 	<button type="button" onClick={() => setLanguages(false)}>X</button>
			<p>Allows you to delete a current item or add a new one</p>
		 	<button type="button">+</button>
		</ReactModal>
		<div>
			<p>Feats: <button type="button" onClick={() => setFeats(true)}>Edit</button></p>
			<p>Feats that are avilable</p>
		</div>
		<ReactModal isOpen={feats}>
		 	<button type="button" onClick={() => setFeats(false)}>X</button>
			<p>Allows you to delete a current item or add a new one</p>
		 	<button type="button">+</button>
		</ReactModal>
		<div>
			<p>Special Abilities: <button type="button" onClick={() => setAbilities(true)}>Edit</button></p>
			<p>Special Abilities that are avilable</p>
		</div>
		<ReactModal isOpen={abilities}>
		 	<button type="button" onClick={() => setAbilities(false)}>X</button>
			<p>Allows you to delete a current item or add a new one</p>
		 	<button type="button">+</button>
		</ReactModal>
			</TabPanel>
			<TabPanel>
		<div>
			<p>Cantrips: <button type="button" onClick={() => setCantrips(true)}>Edit</button></p>
			<p>Cantrips that are avilable</p>
		</div>
		<ReactModal isOpen={cantrips}>
		 	<button type="button" onClick={() => setCantrips(false)}>X</button>
			<p>Allows you to delete a current item or add a new one</p>
		 	<button type="button">+</button>
		</ReactModal>
		<div>
			<p>Prepared Spells: <button type="button" onClick={() => setPrepared(true)}>Edit</button></p>
			<p>Prepared Spells that are avilable</p>
		</div>
		<ReactModal isOpen={prepared}>
		 	<button type="button" onClick={() => setPrepared(false)}>X</button>
			<p>Allows you to delete a current item or add a new one</p>
		 	<button type="button">+</button>
		</ReactModal>
		<div>
			<p>Active Spell Effects Abilities: <button type="button" onClick={() => setActive(true)}>Edit</button></p>
			<p>Active Spell Effects that are avilable</p>
		</div>
		<ReactModal isOpen={active}>
		 	<button type="button" onClick={() => setActive(false)}>X</button>
			<p>Allows you to delete a current item or add a new one</p>
		 	<button type="button">+</button>
		</ReactModal>
		<h2>Spell Slots</h2>
		<div>
			Level	Max	Current
		</div>
		<div>
			Level 1:
		</div>
		<div>
			Level 2:
		</div>
		<div>
			Level 3:
		</div>
		<div>
			Level 4:
		</div>
		<div>
			Level 5:
		</div>
		<div>
			Level 6:
		</div>
		<div>
			Level 7:
		</div>
		<div>
			Level 8:
		</div>
		<div>
			Level 9:
		</div>
		<div>
			<p>Known Spells: <button type="button" onClick={() => setKnown(true)}>Edit</button></p>
			<p>Known Spells that are available</p>
		</div>
		<ReactModal isOpen={known}>
		 	<button type="button" onClick={() => setKnown(false)}>X</button>
			<p>Allows you to delete a current item or add a new one</p>
		 	<button type="button">+</button>
		</ReactModal>
			</TabPanel>

			<TabPanel>
				<h3>Currency</h3>
		<div>
		  		Platinum:
		  		<input type="number" name="platinum"/>
		</div>
		<div>
		  		Gold:
		  		<input type="number" name="gold"/>
		</div>
		<div>
		  		Silver:
		  		<input type="number" name="silver"/>
		</div>
		<div>
		  		Copper:
		  		<input type="number" name="copper"/>
		</div>
		<div>
			<p>Equipment</p>
			<p>Equipment that is available</p>
					<button type="button" onClick={() => setEquipment(true)}>Edit</button>
		</div>
		<ReactModal isOpen={equipment}>
		 	<button type="button" onClick={() => setEquipment(false)}>X</button>
			<p>Allows you to delete a current item or add a new one, if an item is in a current slot already then it replaces it</p>
		 	<button type="button">+</button>
		</ReactModal>
		<div>
			<p>Inventory</p>
			<p>Inventory that is available</p>
					<button type="button" onClick={() => setBags(true)}>Edit</button>
		</div>
		<ReactModal isOpen={bags}>
		 	<button type="button" onClick={() => setBags(false)}>X</button>
			<p>Allows you to delete a current item or add a new one</p>
		 	<button type="button">+</button>
		</ReactModal>
			</TabPanel>

			<TabPanel>
				<button type="button" onClick={() => setLevels(true)}>Change</button>
		<p>Classes and levels</p>
		<ReactModal isOpen={levels}>
		 	<button type="button" onClick={() => setLevels(false)}>X</button>
			<p>Allows you to edit or delete a current item or add a new one</p>
		 	<button type="button">+</button>
		</ReactModal>
			</TabPanel>
		</Tabs>
	);
}

