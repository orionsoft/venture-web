Template.footer.onCreated(function() {
	this.subscribe('pages');
});

Template.footer.helpers({
	getPages: function (section) {
		return orion.pages.collection.find({ section: section }, { sort: { position: 1 } });
	}
});