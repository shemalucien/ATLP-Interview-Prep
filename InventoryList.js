function Inventorylist() {
	let items = []
	const add = (name) => {
		const names = items.filter(item => item.name === name)
		if (names.length === 0) {
			items.push({ name: name })
			console.log("added", name, names);
		}
	}
	const remove = (name) => {
		items = items.filter(item => item.name !== name);
		if (name.length != 0) {
			const index = items.findIndex(i => i == name);
			items.splice(index, 1);
		}
		const getList = () => {
			console.log(items);
			return items

		}

		items.getList()
		items.add('Shema')
		items.getList()
		items.add('Lucien')
		items.getList()
		items.remove('Shema')
		items.getList()
		items.add('jeande')
		items.getList()
		items.add('shema')
		items.getList()

		return { add, remove, getList }


	}
}
items.Inventorylist()
