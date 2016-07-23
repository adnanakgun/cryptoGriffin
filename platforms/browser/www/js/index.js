
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	onDeviceReady: function() {
		admob.createBannerView({publisherId: 'ca-app-pub-7702193583488863/2636032832'});
	}
};