export default class Item {
	constructor(name, quantity = 1) {
		this.name = name;
		this.quantity = quantity;
		this.metric = "owned";
	}
}
