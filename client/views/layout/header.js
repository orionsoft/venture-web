Template.header.onCreated(function() {
  this.subscribe('pages');
});

Template.header.helpers({
  getPages: function (section) {
    return orion.pages.collection.find({ section: section }, { sort: { position: 1 } });
  }
});