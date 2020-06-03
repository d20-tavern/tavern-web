export default class Spell {
	constructor(name, quantity = 1) {
		this.name = name;
		this.quantity = quantity;
		this.metric = "casts";
	}
}
