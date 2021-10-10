const name = {
	name: {
		nativeName: {
			por: {
				official: "Joshua",
			},
		},
	},
};

console.log(Object.values(name.name.nativeName)[0].official);

// const func = (obj) => {
// 	const newArr = Object.values(obj);
// 	return newArr.join(",");
// };

// console.log(func(lang));
