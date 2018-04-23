const lp = require("left-pad");
const sum = (addends) => {
	return addends.reduce((total, current) => {
		return total + current;
	});
};

module.exports = (numbers, organize = true, lineCharacter = "—") => {
	const numsOrganized = numbers.sort((first, second) => {
		return first - second;
	});

	const biggest = numsOrganized[numsOrganized.length - 1];
	const bigLength = biggest.toString().length;

	const addends = organize ? numsOrganized.reverse() : numbers;

	const things = [];

	things.push(...addends.map((value, index) => {
		return (index === 0 ? "  " : "+ ") + lp(value, bigLength);
	}));
	things.push(new Array(addends.length + 2).join(lineCharacter));
	things.push(lp(sum(addends), bigLength + 2));

	return things.join("\n");
};