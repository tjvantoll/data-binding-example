var observable = require("data/observable");
var Widget = require("./Widget");
var widget = new Widget();
var WidgetsViewModel = function() {
	this.set("widget", widget);
};
WidgetsViewModel.prototype = new observable.Observable();
module.exports = new WidgetsViewModel();