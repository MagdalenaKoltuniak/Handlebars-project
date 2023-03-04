const handlebarsHelpers = {
	upper: function (str) {
		return str.toUpperCase();
	},
	findPrice: (entries, selectedItem) => {
		const found = entries.find(el => {
			return el[0] === selectedItem;
		});

		if (!found) {
			throw new Error(`Cannot find proce of ${selectedItem}.`)
		}

		const [, price] = found;
		return price;
	},

	pricify: price => price.toFixed(2),

	isNotInArray: (array, element) => !array.includes(element),

	isInArray: (array, element) => array.includes(element),
};

module.exports = {
	handlebarsHelpers,
};
