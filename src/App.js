import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactModal from 'react-modal';
import 'react-tabs/style/react-tabs.css';

import OverviewTab from './components/tabs/overview.js'
import CombatTab from './components/tabs/combat.js'
import SkillsTab from './components/tabs/skills.js'
import SpellsTab from './components/tabs/spells.js'
import InventoryTab from './components/tabs/inventory.js'
import LevelsTab from './components/tabs/levels.js'

export default class App extends React.Component {
	constructor(props) {
		super(props);

		//bind functions
		this.changeAttribute = this.changeAttribute.bind(this);
		this.changeSkill = this.changeSkill.bind(this);
		this.changeText = this.changeText.bind(this);
		this.changeHealth = this.changeHealth.bind(this);
		this.updateMoney = this.updateMoney.bind(this);

		this.addToList = this.addToList.bind(this);
		this.removeFromList = this.removeFromList.bind(this);

		/*TODO: ALL of this is placeholder info, just to check math and logic.
		 * Every single value here will need to be replaced with data nabbed from the server.
		 * However, for right now, this will function for testing.
		 */
		this.state = {
			account: false,
			characters: false,
			settings: false,
			terms: false,
			help: false,


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

			strengthBase: 2,
			dexBase: 1,
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

			skillRanks: {},
			classSkills: {
				'Acrobatics': true,
				"Bluff": true,
				"Sleight of Hand": true,
			},
			skillMisc: {},

			lv0SpellSlots: 4,
			lv1SpellSlots: 5,
			lv2SpellSlots: 3,
			lv3SpellSlots: 2,
			lv4SpellSlots: 1,
			lv5SpellSlots: 0,
			lv6SpellSlots: 0,
			lv7SpellSlots: 0,
			lv8SpellSlots: 0,
			lv9SpellSlots: 0,

			isPreparedCaster: false,

			platinum: 1,
			gold: 25,
			silver: 0,
			copper: 300,

			cantrips: [],
			availableCantrips: [],

			spells: [],
			availableSpells: [],

			feats: [],
			availableFeats: [],

			items: [],
			availableItems: [],

			classLevels: [],
			availableClassLevels: [],
		};
	}

	changeAttribute(name, value) {
		if(value > 0 && value <= 20) {
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
	}

	changeSkill(name, value) {
		if(value >= 0 && value <= this.state.charLevel) {
			var newRanks = {...this.state.skillRanks, [name]: parseInt(value)};
			this.setState({skillRanks: newRanks});
		}
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

	addToList(name, listBox) {
		var selection = [];
		var options = listBox.options;

		if(!options) {
			return;
		}

		for(var i = 0; i < options.length; i++) {
			if(options[i].selected) {
				selection.push(options[i].value);
			}
		}

		//so far, everything is the same. Now, we diverge
		//and change state based on name
		switch(name) {
			case "Cantrips":
				var newCantrips = this.state.cantrips;
				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newCantrips.length; j++) {
						if(selection[i] === newCantrips[j]) {
							newCantrips[j].quantity += 1;
							break;
						}
					}
				}

				this.setState({
					cantrips: newCantrips
				});
				break;

			case "Spells":
				var newSpells = this.state.spells;
				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newSpells.length; j++) {
						if(selection[i] === newSpells[j]) {
							newSpells[j].quantity += 1;
							break;
						}
					}
				}

				this.setState({
					spells: newSpells
				});
				break;

			case "Feats":
				var newFeats = this.state.feats;
				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newFeats.length; j++) {
						if(selection[i] === newFeats[j]) {
							newFeats[j].quantity += 1;
							break;
						}
					}
				}

				this.setState({
					feats: newFeats
				});
				break;

			case "Items":
				var newItems = this.state.items;
				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newItems.length; j++) {
						if(selection[i] === newItems[j]) {
							newItems[j].quantity += 1;
							break;
						}
					}
				}

				this.setState({
					items: newItems
				});
				break;

			case "Class Levels":
				var newClassLevels = this.state.classLevels;
				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newClassLevels.length; j++) {
						if(selection[i] === newClassLevels[j]) {
							newClassLevels[j].quantity += 1;
							break;
						}
					}
				}

				this.setState({
					classLevels: newClassLevels
				});
				break;
		}
	}

	removeFromList(name, listBox) {
		var selection = [];
		var options = listBox.options;

		if(!options) {
			return;
		}

		for(var i = 0; i < options.length; i++) {
			if(options[i].selected) {
				selection.push(options[i].value);
			}
		}

		switch(name) {
			case "Cantrips":
				var newCantrips = this.state.cantrips;

				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newCantrips.length; j++) {
						if(selection[i] === newCantrips[j]) {
							newCantrips[j].quantity -= 1;

							if(newCantrips[j].quantity >= 0) {
								newCantrips[j].splice(j,1);
								i--;	//sub 1 to realign with modded array
							}
							break;
						}
					}
				}

				this.setState({
					cantrips: newCantrips
				});
				break;

			case "Spells":
				var newSpells = this.state.spells;

				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newSpells.length; j++) {
						if(selection[i] === newSpells[j]) {
							newSpells[j].quantity -= 1;

							if(newSpells[j].quantity >= 0) {
								newSpells[j].splice(j,1);
								i--;	//sub 1 to realign with modded array
							}
							break;
						}
					}
				}

				this.setState({
					spells: newSpells
				});
				break;

			case "Feats":
				var newFeats = this.state.feats;

				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newFeats.length; j++) {
						if(selection[i] === newFeats[j]) {
							newFeats[j].quantity -= 1;

							if(newFeats[j].quantity >= 0) {
								newFeats[j].splice(j,1);
								i--;	//sub 1 to realign with modded array
							}
							break;
						}
					}
				}

				this.setState({
					feats: newFeats
				});
				break;

			case "Items":
				var newItems = this.state.items;

				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newItems.length; j++) {
						if(selection[i] === newItems[j]) {
							newItems[j].quantity -= 1;

							if(newItems[j].quantity >= 0) {
								newItems[j].splice(j,1);
								i--;	//sub 1 to realign with modded array
							}
							break;
						}
					}
				}

				this.setState({
					items: newItems
				});
				break;

			case "Class Levels":
				var newClassLevels = this.state.classLevels;

				for(var i = 0; i < selection.length; i++) {
					for(var j = 0; j < newClassLevels.length; j++) {
						if(selection[i] === newClassLevels[j]) {
							newClassLevels[j].quantity -= 1;

							if(newClassLevels[j].quantity >= 0) {
								newClassLevels[j].splice(j,1);
								i--;	//sub 1 to realign with modded array
							}
							break;
						}
					}
				}

				this.setState({
					classLevels: newClassLevels
				});
				break;
		}
	}

	updateMoney(value, type) {
		switch(type) {
			case 'p':
				this.setState({
					platinum: value
				});
				break;
			case 'g':
				this.setState({
					gold: value
				});
				break;
			case 's':
				this.setState({
					silver: value
				});
				break;
			case 'c':
				this.setState({
					copper: value
				});
				break;
		}
	}

	render() {
		return (
			<Tabs>
				<TabList>
					<Tab>Menu</Tab>
					<Tab>Overview</Tab>
					<Tab>Combat</Tab>
					<Tab>Skills</Tab>
					<Tab>Spells & Feats</Tab>
					<Tab>Inventory</Tab>
					<Tab>Levels</Tab>
				</TabList>

				<TabPanel>
					<button type="button" onClick={() => {this.setState({account: true})}}>Account</button>
					<button type="button" onClick={() => {this.setState({characters: true})}}>Characters</button>
					{/*
					<button type="button" onClick={() => {this.setState({settings: true})}}>Settings</button>
					<button type="button" onClick={() => {this.setState({terms: true})}}>Terms of Service</button>
					*/}
					<button type="button" onClick={() => {this.setState({help: true})}}>Help</button>

					<ReactModal isOpen={this.state.account}>
						<button type="button" onClick={() => {this.setState({account: true})}}>X</button>
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
									<input type="text" name="pass"/>
								</p>
							</label>
							<button type="button">ENTER</button>
						</div>
					</ReactModal>
					<ReactModal isOpen={this.state.characters}>
						<button type="button" onClick={() => {this.setState({characters: false})}}>X</button>
						<p>List of characters, and the ability to pick or delete one</p>
						<button type="button">+</button>
					</ReactModal>
					<ReactModal isOpen={this.state.settings}>
						<button type="button" onClick={() => {this.setState({settings: false})}}>X</button>
						<p>No settings</p>
					</ReactModal>
					<ReactModal isOpen={this.state.terms}>
						<button type="button" onClick={() => {this.setState({terms: false})}}>X</button>
						<p>TBD</p>
					</ReactModal>
					<ReactModal isOpen={this.state.help}>
						<button type="button" onClick={() => {this.setState({help: false})}}>X</button>
						<p>an overview of every tab and what it does as well as contact information at the end in the form of our emails</p>
					</ReactModal>
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

						updateAttr={this.changeAttribute}
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
						updateAttr={this.changeAttribute}
					/>
				</TabPanel>

				<TabPanel>
					<SkillsTab
						skillRanks={this.state.skillRanks}
						classSkills={this.state.classSkills}
						skillMisc={this.state.skillMisc}

						armorPenalty={this.state.armorPenalty}

						strengthVal={this.state.strengthVal}
						dexVal={this.state.dexVal}
						conVal={this.state.conVal}
						intVal={this.state.intVal}
						wisdomVal={this.state.wisdomVal}
						charismaVal={this.state.charismaVal}

						level={this.state.charLevel}
						updateSkill={this.changeSkill}
					/>
				</TabPanel>

				<TabPanel>
					<SpellsTab
						lv0Slots={this.state.lv0SpellSlots}
						lv1Slots={this.state.lv1SpellSlots}
						lv2Slots={this.state.lv2SpellSlots}
						lv3Slots={this.state.lv3SpellSlots}
						lv4Slots={this.state.lv4SpellSlots}
						lv5Slots={this.state.lv5SpellSlots}
						lv6Slots={this.state.lv6SpellSlots}
						lv7Slots={this.state.lv7SpellSlots}
						lv8Slots={this.state.lv8SpellSlots}
						lv9Slots={this.state.lv9SpellSlots}
						
						charCantrips={this.state.cantrips}
						availableCantrips={this.state.availableCantrips}
						
						charSpells={this.state.spells}
						availableSpells={this.state.availableSpells}
						
						charFeats={this.state.feats}
						availableFeats={this.state.availableFeats}

						addToList={this.addToList}
						removeFromList={this.removeFromList}
					/>
				</TabPanel>

				<TabPanel>
					<InventoryTab
						platinum={this.state.platinum}
						gold={this.state.gold}
						silver={this.state.silver}
						copper={this.state.copper}
						
						updateMoney={this.updateMoney}
						
						charItems={this.state.items}
						availableItems={this.state.availableItems}

						addToList={this.addToList}
						removeFromList={this.removeFromList}
					/>
				</TabPanel>

				<TabPanel>
					<LevelsTab
						charClassLevels={this.state.classLevels}
						availableClassLevels={this.state.availableClassLevels}
						
						addToList={this.addToList}
						removeFromList={this.removeFromList}
					/>
				</TabPanel>
			</Tabs>
		);
	}
}

		/* TODO: Finish resolving merge conflict, put modal into tabs
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
*/
