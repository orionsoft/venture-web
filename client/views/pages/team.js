Template.team.onRendered(function() {
  this.subscribe('entity', 'team');
});

Template.team.helpers({
  persons: function() {
    return orion.entities.team.collection.find({}, { sort: { index: 1 } });
  }
});