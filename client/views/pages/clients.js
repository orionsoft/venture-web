Template.clients.onRendered(function() {
  this.subscribe('entity', 'clients');
});

Template.clients.helpers({
  clients: function() {
    return orion.entities.clients.collection.find({}, { sort: { index: 1 } });
  }
});