var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|dist\/)/,
		loader: "babel"
	},
	{
		test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
		exclude: /(node_modules|bower_components)/,
		loader: "url?limit=10000&mimetype=image/svg+xml"
	},
	{
		test: /^\.gif|.jpg|.png$/,
		exclude: /(node_modules|bower_components)/,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /[\/\\]src[\/\\].*\.css/,
		exclude: /(node_modules|bower_components|dist\/)/,
		loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]')
	},
	{
		test: /[\/\\]src[\/\\].*\.scss/,
		exclude: /(node_modules|bower_components|dist\/)/,
		loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass')
	},
	{
		test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
		loader: ExtractTextPlugin.extract('style', 'css')
	}
];
