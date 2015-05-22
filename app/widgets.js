var viewModel = require("./widgets-view-model");

exports.loaded = function(args) {
	var page = args.object;
	page.bindingContext = viewModel;
}
