Template.clients.onRendered(function() {
  this.subscribe('entity', 'clients');
});

Template.clients.helpers({
  clients: function() {
    return Clients.find({}, { sort: { index: 1 } })
  }
});
