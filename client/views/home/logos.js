Template.homeLogos.onCreated(function() {
	this.subscribe('logos');
});

Template.homeLogos.helpers({
	logos: function () {
		return Logos.find();
	}
});
