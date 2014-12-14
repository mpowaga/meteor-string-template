StringTemplate = {};

StringTemplate.compile = function (str, data) {
	var compiled = SpacebarsCompiler.compile(str);
	var renderer = eval(compiled);
	var view = new Blaze.View(renderer);

	if (data) {
		return Blaze.toHTMLWithData(view, data);
	}
	return Blaze.toHTML(view);
};

UI.registerHelper('compileString', function(options) {
	var result = null;
	var source = '';
	var data = this;

	if (typeof options == 'string') {
		source = options;
	} else if (options && options.hash) {
		if (typeof options.hash.str == 'string') {
			source = options.hash.str;
		}
		if (options.hash.data) {
			data = options.hash.data;
		}
	}

	return StringTemplate.compile(source, data);
});