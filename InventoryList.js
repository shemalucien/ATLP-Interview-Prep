function Inventorylist() {
	return {
		itemsCollection: [],
		add: function (name) {
			const index = this.itemsCollection.indexOf(name);
			if (index === -1)
				this.itemsCollection.push(name);
		},
		remove: function (name) {
			const index = this.itemsCollection.indexOf(name);
			if (index > -1)
				this.itemsCollection.splice(index, 1);
		},
		getList: function () {
			return this.itemsCollection;
		}
	}
}
console.log(Inventorylist.add('shema'));
// console.log(add(lucien));
// console.log(add(placide));
// console.log(remove(shema));
console.log(Inventorylist.getList());

