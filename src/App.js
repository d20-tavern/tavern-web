import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactModal from 'react-modal';
import 'react-tabs/style/react-tabs.css';
import './App.css';

import OverviewTab from './components/tabs/overview.js'

export default class App extends React.Component {
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
						alignment={this.state.charAlign}

						currentHealth={this.state.currentHealth}
						maxHealth={this.state.maxHealth}

						strengthVal={this.state.strengthVal}
						strengthBase={this.state.strengthBase}
						strengthInherent={this.state.strengthInherent}
						strengthEnhance={this.state.strengthEnhance}
						strengthMisc={this.state.strengthEnhance}

						
						dexVal={this.state.dexVal}
						dexBase={this.state.dexBase}
						dexInherent={this.state.dexInherent}
						dexEnhance={this.state.dexEnhance}
						dexMisc={this.state.dexEnhance}
			
						conVal={this.state.conVal}
						conBase={this.state.conBase}
						conInherent={this.state.conInherent}
						conEnhance={this.state.conEnhance}
						conMisc={this.state.conEnhance}

						intVal={this.state.intVal}
						intBase={this.state.intBase}
						intInherent={this.state.intInherent}
						intEnhance={this.state.intEnhance}
						intMisc={this.state.intEnhance}

						wisdomVal={this.state.wisdomVal}
						wisdomBase={this.state.wisdomBase}
						wisdomInherent={this.state.wisdomInherent}
						wisdomEnhance={this.state.wisdomEnhance}
						wisdomMisc={this.state.wisdomEnhance}

						charismaVal={this.state.charismaVal}
						charismaBase={this.state.charismaBase}
						charismaInherent={this.state.charismaInherent}
						charismaEnhance={this.state.charismaEnhance}
						charismaMisc={this.state.charismaEnhance}

						description={this.props.charDescription}
						backstory={this.props.charBackstory}
					/>
				</TabPanel>

				<TabPanel>

				<div>
						<label>
							MAX HP:
							<input type="text" name="maxHP"/>
						</label>
				</div>
				<div>
						<label>
							HP:
							<input type="text" name="hp"/>
						</label>
				</div>
				<div>
						<label>
							AC:
							<input type="text" name="AC"/>
						</label>
				</div>
				<div>
						<label>
						Touch:
						<input type="text" name="Touch"/>
						</label>
				</div>

				<div>
					<p>STR:	</p>
				</div>
				<div>
					<p>DEX:	</p>
				</div>
				<div>
					<p>CON:	</p>
				</div>
				<div>
					<p>INT:	</p>
				</div>
				<div>
					<p>WIS:	</p>
				</div>
				<div>
					<p>CHA:	</p>
				</div>

				<div>
					<p>Fortitude:	</p>
				</div>
				<div>
					<p>Reflect:	</p>
				</div>
				<div>
					<p>Will:	</p>
				</div>


				<div>
					<p>Available Spells:</p>
					<p>Spells that are available</p>
				</div>

				<div>
					<p>Base Attack Bonus:	</p>
				</div>
				<div>
					<p>Spell Ressistance:	</p>
				</div>
				<div>
					<p>Flat Footed:	</p>
				</div>
				<div>
					<p>CMD:	</p>
				</div>
				<div>
					<p>Inititive:	</p>
				</div>

				<div>
					<p>Abilities:</p>
					<p>Abilities that are available</p>
				</div>

				</TabPanel>

				<TabPanel>
			<div>
						<button type="button">-</button>
					Acrobatics:  
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Appraise: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Bluff: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Climb: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Craft: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Profession: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Local: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Handle Animal: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Heal: 
						<button type="button">+</button>
			</div>

			<div>
						<button type="button">-</button>
					Intimidate: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Arcana: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Local: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Dungeoneering: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Disguise: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Sense Motive: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Nobility: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Planes: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Religion: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Linguistics: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Perception: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					History: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Fly: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Spellcraft: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Stealth: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Survival: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Swim: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Use Magic Device: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Ride: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Nature: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Diplomacy: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Engineering: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Preform: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Disable Device: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Geography: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Escape Artist: 
						<button type="button">+</button>
			</div>
			<div>
						<button type="button">-</button>
					Slight of Hand: 
						<button type="button">+</button>
			</div>
			<div>
				<p>Languages:</p>
				<p>Languages that are avilable</p>
			</div>
			<div>
				<p>Feats:</p>
				<p>Feats that are avilable</p>
			</div>
			<div>
				<p>Special Abilities:</p>
				<p>Special Abilities that are avilable</p>
			</div>
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

