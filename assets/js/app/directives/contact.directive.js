(function(app) {

	app.ContactComponent = ng.core
	.Component({
		selector: 'contact',
		templateUrl : 'templates/contactform.component.html'
	})
	.Class({
		constructor: function() {
			this.model = new app.Contact('', '', '');
			this.submitted = false;
		},
		onSubmit: function() {
			this.submitted = true;
		}, 

		diagnostic: function() {
        	return JSON.stringify(this.model);
      	}
	});
})(window.app || (window.app = {}));