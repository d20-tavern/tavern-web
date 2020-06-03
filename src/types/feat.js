export default class Feat {
	constructor(name, quantity = 1) {
		this.name = name;
		this.quantity = quantity;
		this.metric = "taken";
	}
}
