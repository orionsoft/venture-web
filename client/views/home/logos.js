Template.homeLogos.onCreated(function() {
	this.subscribe('entity', 'logos');
});

Template.homeLogos.helpers({
	logos: function () {
		return orion.entities.logos.collection.find();
	}
});