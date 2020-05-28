import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactModal from 'react-modal';
import 'react-tabs/style/react-tabs.css';
import './App.css';

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

			moveSpeed: 20
		};
	}

	//functions passed to children for updating data
	incrementAttribute(name) {
		switch(name) {
			case "Strength":
				this.setState(prevState => {
					return {strengthVal: prevState.strengthVal + 1}
				});
				break;
			case "Dexterity":
				this.setState(prevState => {
					return {dexVal: prevState.dexVal + 1}
				});
				break;
			case "Constitution":
				this.setState(prevState => {
					return {conVal: prevState.conVal + 1}
				});
				break;
			case "Intelligence":
				this.setState(prevState => {
					return {intVal: prevState.intVal + 1}
				});
				break;
			case "Wisdom":
				this.setState(prevState => {
					return {wisdomVal: prevState.wisdomVal + 1}
				});
				break;
			case "Charisma":
				this.setState(prevState => {
					return {charismaVal: prevState.charismaVal + 1}
				});
				break;
		}
				
	}

	decrementAttribute(name) {
		switch(name) {
			case "Strength":
				this.setState(prevState => {
					return {strengthVal: prevState.strengthVal - 1}
				});
				break;
			case "Dexterity":
				this.setState(prevState => {
					return {dexVal: prevState.dexVal - 1}
				});
				break;
			case "Constitution":
				this.setState(prevState => {
					return {conVal: prevState.conVal - 1}
				});
				break;
			case "Intelligence":
				this.setState(prevState => {
					return {intVal: prevState.intVal - 1}
				});
				break;
			case "Wisdom":
				this.setState(prevState => {
					return {wisdomVal: prevState.wisdomVal - 1}
				});
				break;
			case "Charisma":
				this.setState(prevState => {
					return {charismaVal: prevState.charismaVal - 1}
				});
				break;
		}
	}

	incrementSkill(name) {
	}

	decrementSkill(name) {
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
			<Tabs>
				<TabList>
					<Tab>Menu</Tab>
					<Tab>Overview</Tab>
					<Tab>Combat</Tab>
					<Tab>Skills</Tab>
					<Tab>Spells</Tab>
					<Tab>Inventory</Tab>
					<Tab>Levels</Tab>
				</TabList>


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
}

