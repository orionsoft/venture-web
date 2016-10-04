Template.team.onRendered(function() {
  this.subscribe('entity', 'team');
});

Template.team.helpers({
  persons: function() {
    return Teams.collection.find({}, { sort: { index: 1 } })
  }
});
