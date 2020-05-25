import React, {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ReactModal from 'react-modal';
import 'react-tabs/style/react-tabs.css';
import './App.css';




function App() {
const [account, setAccount]=useState(false)
const [characters, setCharacters]=useState(false)
const [settings, setSettings]=useState(false)
const [terms, setTerms]=useState(false)
const [help, setHelp]=useState(false)


const [languages, setLanguages]=useState(false)
const [feats, setFeats]=useState(false)
const [abilities, setAbilities]=useState(false)


const [cantrips, setCantrips]=useState(false)
const [prepared, setPrepared]=useState(false)
const [active, setActive]=useState(false)
const [known, setKnown]=useState(false)

const [equipment, setEquipment]=useState(false)
const [bags, setBags]=useState(false)

const [levels, setLevels]=useState(false)


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
                <button type="button" onClick={() => setAccount(true)}>Account</button>
                <button type="button" onClick={() => setCharacters(true)}>Characters</button>
                <button type="button" onClick={() => setSettings(true)}>Settings</button>
                <button type="button" onClick={() => setTerms(true)}>Terms of Service</button>
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
            	<form>
			<div>
        			<label>
          				Name:
          				<input type="text" name="name"/>
        			</label>
			</div>
			<div>
        			<label>
          				Race:
          				<input type="text" name="race"/>
        			</label>
			</div>
			<div>
        			<label>
          				Character Level:
          				<input type="text" name="level"/>
        			</label>
			</div>
			<div>
        			<label>
          				Alignment:
          				<input type="text" name="alignment"/>
        			</label>
			</div>
      		</form>
			<div>			
				<p>Max Health:	</p>
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

			<p>Character Description:</p>
			<textarea>
 			
			</textarea>

			<p>Backstory:</p>
			<textarea>
 			
			</textarea>
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

export default App;
