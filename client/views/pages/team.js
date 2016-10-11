import { Template } from 'meteor/templating'

Template.team.onRendered(function () {
  this.subscribe('team')
})

Template.team.helpers({
  persons: function () {
    return Teams.find({}, { sort: { index: 1 } }).fetch()
  }
})
