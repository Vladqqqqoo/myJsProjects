module.exports = {
	"extends": "airbnb-base",
	"env": {
		"node": true,
		"mocha": true,
		"browser": true,
	},
	"rules": {
		"linebreak-style": ["error", process.env.NODE_ENV === 'prod' ? "unix" : "windows"],
		"indent": [2, "tab"],
		"no-tabs": 0
	}
};