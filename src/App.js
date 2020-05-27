import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './App.css';




function App() {



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
		<input type="submit" value="Account"/>
		<input type="submit" value="Characters"/>
		<input type="submit" value="Settings"/>
		<input type="submit" value="Terms of Service"/>
		<input type="submit" value="Help"/>
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
				<p>Spells that are avilable</p>
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
				<p>Abilities that are avilable</p>
			</div>

            </TabPanel>

            <TabPanel>
		<div>
                	<input type="submit" value="-"/>
				Acrobatics:  
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Appraise: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Bluff: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Climb: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Craft: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Profession: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Local: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Handle Animal: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Heal: 
                	<input type="submit" value="+"/>
		</div>

		<div>
                	<input type="submit" value="-"/>
				Intimidate: 
                	<input type="submit" value="+"/>
		</div>

		<div>
                	<input type="submit" value="-"/>
				Arcana: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Local: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Dungeoneering: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Disguise: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Sense Motive: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Nobility: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Planes: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Religion: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Linguistics: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Perception: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				History: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Fly: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Spellcraft: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Stealth: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Survival: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Swim: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Use Magic Device: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Ride: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Nature: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Diplomacy: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Engineering: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Preform: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Disable Device: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Geography: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Escape Artist: 
                	<input type="submit" value="+"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
				Slight of Hand: 
                	<input type="submit" value="+"/>
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
			<p>Known Spells that are avilable</p>
		</div>
            </TabPanel>

            <TabPanel>
                <h3>Currency</h3>
		<div>
          		Platinum:
          		<input type="text" name="platinum"/>
		</div>
		<div>
          		Gold:
          		<input type="text" name="gold"/>
		</div>
		<div>
          		Silver:
          		<input type="text" name="silver"/>
		</div>
		<div>
          		Copper:
          		<input type="text" name="copper"/>
		</div>
		<div>
                	<input type="submit" value="-"/>
                	<input type="submit" value="+"/>
				<p>Equitment</p>
				<p>Equitment that is avilable</p>
		</div>
		<div>
                	<input type="submit" value="-"/>
                	<input type="submit" value="+"/>
				<p>Bags</p>
				<p>Bags that are avilable</p>
		</div>
            </TabPanel>

            <TabPanel>
                <input type="submit" value="Change"/>
			<p>Classes and levels</p>
            </TabPanel>
        </Tabs>
    );
}

export default App;
