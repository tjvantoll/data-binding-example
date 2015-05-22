var observable = require("data/observable");
function Widget() {}
Widget.prototype = new observable.Observable();
module.exports = Widget;