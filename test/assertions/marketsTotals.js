var assert = require('chai').assert;
// marketsTotals:
// {
// 	numAll: 1,
// 	numFavorites: 0,
// 	numFiltered: 0,
// 	numPendingReports: 19,
// 	numUnpaginated: 0,
// 	positionsSummary:
// 	{
// 		gainPercent: [Object],
// 		netChange: [Object],
// 		numPositions: [Object],
// 		positions: undefined/[Object],
// 		purchasePrice: [Object],
// 		qtyShares: [Object],
// 		shareChange: [Object],
// 		totalCost: [Object],
// 		totalValue: [Object],
// 	}
// },
function checkDefinedAndNumber(obj, name) {
	assert.isDefined(obj, `marketsTotals.${name} isn't defined`);
	assert.isNumber(obj, `marketsTotals.${name} isn't a number`);
}

function checkPositionSummaryObject(obj, name) {
	assert.isDefined(obj, `positionsSummary.${name} isn't defined`);
	assert.isObject(obj, `positionsSummary.${name} isn't a object`);
	assert.isDefined(obj.value, `${name}.value isn't defined`);
	assert.isNumber(obj.value, `${name}.value isn't a number`);
	assert.isDefined(obj.formattedValue, `${name}.formattedValue isn't defined`);
	assert.isNumber(obj.formattedValue, `${name}.formattedValue isn't a number`);
	assert.isDefined(obj.formatted, `${name}.formatted isn't defined`);
	assert.isString(obj.formatted, `${name}.formatted isn't a string`);
	assert.isDefined(obj.roundedValue, `${name}.roundedValue isn't defined`);
	assert.isNumber(obj.roundedValue, `${name}.roundedValue isn't a number`);
	assert.isDefined(obj.rounded, `${name}.rounded isn't defined`);
	assert.isString(obj.rounded, `${name}.rounded isn't a string`);
	assert.isDefined(obj.minimized, `${name}.minimized isn't defined`);
	assert.isString(obj.minimized, `${name}.minimized isn't a string`);
	assert.isDefined(obj.denomination, `${name}.denomination isn't defined`);
	assert.isString(obj.denomination, `${name}.denomination isn't a string`);
	assert.isDefined(obj.full, `${name}.full isn't defined`);
	assert.isString(obj.full, `${name}.full isn't a string`);
}

function marketsTotalsAssertion(actual) {
	assert.isDefined(actual, `marketsTotals isn't defined`);
	assert.isObject(actual, `marketsTotals isn't an object`);

	checkDefinedAndNumber(actual.numAll, `numAll`);
	checkDefinedAndNumber(actual.numFavorites, `numFavorites`);
	checkDefinedAndNumber(actual.numFiltered, `numFiltered`);
	checkDefinedAndNumber(actual.numPendingReports, `numPendingReports`);
	checkDefinedAndNumber(actual.numUnpaginated, `numUnpaginated`);

	assert.isDefined(actual.positionsSummary, `marketsTotals.positionsSummary isn't defined`);
	assert.isObject(actual.positionsSummary, `marketsTotals.positionsSummary isn't an object as expected`);
}

function positionsSummaryAssertion(actual) {
	assert.isDefined(actual, `positionsSummary isn't defined`);
	assert.isObject(actual, `positionsSummary isn't an object`);
	checkPositionSummaryObject(actual.gainPercent, 'gainPercent');
	checkPositionSummaryObject(actual.netChange, 'netChange');
	checkPositionSummaryObject(actual.numPositions, 'numPositions');
	checkPositionSummaryObject(actual.purchasePrice, 'purchasePrice');
	checkPositionSummaryObject(actual.qtyShares, 'qtyShares');
	checkPositionSummaryObject(actual.shareChange, 'shareChange');
	checkPositionSummaryObject(actual.totalCost, 'totalCost');
	checkPositionSummaryObject(actual.totalValue, 'totalValue');
}

module.exports = {
	marketsTotalsAssertion: marketsTotalsAssertion,
	positionsSummaryAssertion: positionsSummaryAssertion
};