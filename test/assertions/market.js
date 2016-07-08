var assert = require('chai').assert;

import numberShape from '../../test/assertions/common/formatted-number';

// markets:
//  [ { id: String,
//      type: String,
//      description: String,
//      endDate: Object,
//			endDateLabel: String,
//      tradingFeePercent: Object,
//      volume: Object,
//      isOpen: Boolean,
//      isPendingReport: Boolean,
//      marketLink: Object,
//      tags: Object,
//      outcomes: Object,
//      reportableOutcomes: Object,
//      tradeSummary: Function,
//      priceTimeSeries: Object,
//      positionsSummary: Object,
//      report: Object },
// 				...
// 	]
function marketAssertion(actual) {
	assert.isDefined(actual, `markets is empty.`)
	assert.isObject(actual, `markets[0] (market) isn't an object`);

	assert.isDefined(actual.id, `market.id isn't defined.`);
	assert.isString(actual.id, `market.id isn't a string`);

	assert.isDefined(actual.type, `market.type isn't defined.`);
	assert.isString(actual.type, `market.type isn't a string`);

	assert.isDefined(actual.description, `market.description isn't defined`);
	assert.isString(actual.description, `market.description isn't a string`);

	assert.isDefined(actual.endDate, `market.endDate isn't defined`);
	assert.isObject(actual.endDate, `market.endDate isn't an object`);

	assert.isDefined(actual.endDateLabel, `market.endDateLabel isn't defined`);
	assert.isString(actual.endDateLabel, `market.endDateLabel isn't an string`);

	assert.isDefined(actual.takerFeePercent, `market.takerFeePercent isn't defined`);
	assert.isObject(actual.takerFeePercent, `market.takerFeePercent isn't an object`);
	numberShape(actual.takerFeePercent);

	assert.isDefined(actual.makerFeePercent, `market.makerFeePercent isn't defined`);
	assert.isObject(actual.makerFeePercent, `market.makerFeePercent isn't an object`);
	numberShape(actual.makerFeePercent);

	assert.isDefined(actual.volume, `market.volume isn't defined`);
	assert.isObject(actual.volume, `market.volume isn't an object`);
	numberShape(actual.volume);

	assert.isDefined(actual.isOpen, `market.isOpen isn't defined`);
	assert.isBoolean(actual.isOpen, `market.isOpen isn't a boolean`);

	assert.isDefined(actual.isPendingReport, `market.isPendingReport isn't defined`);
	assert.isBoolean(actual.isPendingReport, `market.isPendingReport isn't a boolean`);

	assert.isDefined(actual.marketLink, `market.marketLink isn't defined`);
	assert.isObject(actual.marketLink, `market.marketLink isn't an object`);
	marketLinkAssertion(actual.marketLink);

	assert.isDefined(actual.tags, `market.tags isn't defined`);
	assert.isArray(actual.tags, `market.tags isn't an array`);

	assert.isDefined(actual.outcomes, `market.outcomes isn't defined`);
	assert.isArray(actual.outcomes, `market.outcomes isn't an array`);

	assert.isDefined(actual.reportableOutcomes, `market.reportableOutcomes isn't defined`);
	assert.isArray(actual.reportableOutcomes, `market.reportableOutcomes isn't an array`);

	assert.isDefined(actual.tradeSummary, `market.tradeSummary isn't defined`);
	assert.isObject(actual.tradeSummary, `market.tradeSummary isn't a object`);

	assert.isDefined(actual.priceTimeSeries, `market.priceTimeSeries isn't defined`);
	assert.isArray(actual.priceTimeSeries, `market.priceTimeSeries isn't an array`);

	assert.isDefined(actual.positionsSummary, `market.positionsSummary isn't defined`);
	assert.isObject(actual.positionsSummary, `market.positionsSummary isn't an object`);

	assert.isDefined(actual.report, `market.report isn't defined`);
	assert.isObject(actual.report, `market.report isn't an object`);
	reportAssertion(actual.report);

	assert.isDefined(actual.orderBook, `market.orderBook isn't defined`);
	assert.isObject(actual.orderBook, `market.orderBook isn't an object`);
}

// report: {
// 	isUnethical: Boolean,
// 	onSubmitReport: [Function: onSubmitReport]
// }
function reportAssertion(actual) {
	assert.isDefined(actual, `market doesn't have a report object`);
	assert.isObject(actual, `market.report isn't an object`);
	assert.isDefined(actual.isUnethical, `market.report.isUnethical isn't defined`);
	assert.isBoolean(actual.isUnethical, `market.report.isUnethical isn't a boolean`);
	assert.isDefined(actual.onSubmitReport, `market.report.onSubmitReport isn't defined`);
	assert.isFunction(actual.onSubmitReport, `market.report.onSubmitReport isn't a function`);
}
// marketLink: {
// 	text: string,
//   className: string,
//   onClick: [Function: onClick]
// }
function marketLinkAssertion(actual) {
	assert.isDefined(actual, `market.marketLink isn't defined`);
	assert.isObject(actual, `market.marketLink isn't an object`);
	assert.isDefined(actual.text, `market.marketLink.text isn't defined`);
	assert.isString(actual.text, `market.marketLink.text isn't a string`);
	assert.isDefined(actual.className, `market.marketLink.className isn't defined`);
	assert.isString(actual.className, `market.marketLink.className isn't a string`);
	assert.isDefined(actual.onClick, `market.marketLink.onClick isn't defined`);
	assert.isFunction(actual.onClick, `market.marketLink.onClick isn't a function`);
}

module.exports = {
	marketAssertion: marketAssertion,
	reportAssertion: reportAssertion,
	marketLinkAssertion: marketLinkAssertion
};
